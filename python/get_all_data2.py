import requests

key = '3mKWpcqU6sKZVtaK0WjIQcg8WU5aHSCkGVwLilt%2FvWwE7TP9a0leTQfFtMzbUJmzsjelusNj3Q2XXX0VINWBMg%3D%3D'
url = 'http://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1?ServiceKey='+key

response = requests.get(url)
print(response.content)
