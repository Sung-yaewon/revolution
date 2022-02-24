import requests

key = '3mKWpcqU6sKZVtaK0WjIQcg8WU5aHSCkGVwLilt%2FvWwE7TP9a0leTQfFtMzbUJmzsjelusNj3Q2XXX0VINWBMg%3D%3D'
url = 'http://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1?ServiceKey='+key
params ={'desc_kor' : '바나나칩', 'pageNo' : '1', 'numOfRows' : '3', 'bgn_year' : '2017', 'animal_plant' : '(유)돌코리아', 'type' : 'xml' }

response = requests.get(url, params=params)
print(response.content)
