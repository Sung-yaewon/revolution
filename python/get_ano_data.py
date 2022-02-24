from urllib.request import urlopen
from urllib.parse import urlencode, unquote, quote_plus
import datetime
from dateutil.relativedelta import relativedelta
import urllib
import requests
import pandas as pd
import xmltodict
import json

key='3mKWpcqU6sKZVtaK0WjIQcg8WU5aHSCkGVwLilt%2FvWwE7TP9a0leTQfFtMzbUJmzsjelusNj3Q2XXX0VINWBMg%3D%3D'
url = f'http://apis.data.go.kr/1470000/FoodNtrIrdntInfoService/getFoodNtrItdntList?ServiceKey='+key+'&numOfRows=3&pageNo=1&type=xml'

response = urlopen(url)
results = response.read().decode("utf-8")
results_to_json = xmltodict.parse(results)
data = json.loads(json.dumps(results_to_json))
print(type(data))   # dic
print(data)
