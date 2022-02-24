import requests
import xml.etree.ElementTree as elem

url = 'http://apis.data.go.kr/1390802/AgriFood/MzenFoodCode/getKoreanFoodList?serviceKey=yYsWITAIRrEhGS4BQkyisAOYBmM%2FMVdoPLFJ8DJRLqZOtEtQ2BpnIgJXwhHBXDoI%2FLqeDFrXgvmCQBUDcGlxjg%3D%3D&food_Name='
foodname = '감자'
url = url + foodname

raw = elem.fromstring(requests.get(url, verify=False).text)

url2 = 'http://apis.data.go.kr/1390802/AgriFood/MzenFoodNutri/getKoreanFoodIdntList?serviceKey=yYsWITAIRrEhGS4BQkyisAOYBmM%2FMVdoPLFJ8DJRLqZOtEtQ2BpnIgJXwhHBXDoI%2FLqeDFrXgvmCQBUDcGlxjg%3D%3D&food_Code='
foodcode = raw[1][3][0][0].text
url2 = url2 + foodcode

raw2 = elem.fromstring(requests.get(url2, verify=False).text)

print('입력한 음식 : ' + foodname)
print('칼로리 : ' + raw2[1][0][0][2][3].text + 'kcal')
print('탄수화물 : ' + raw2[1][0][0][2][8].text + 'g')
print('단백질 : ' + raw2[1][0][0][2][5].text + 'g')
print('지방 : ' + raw2[1][0][0][2][14].text + 'g')
