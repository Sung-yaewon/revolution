from urllib.request import urlopen
from urllib.parse import urlencode, unquote, quote_plus
import datetime
from dateutil.relativedelta import relativedelta
import urllib
import requests
import pandas as pd
import xmltodict
import json

#before_day = (datetime.date.today() - datetime.timedelta(days=10)).strftime('%Y%m%d')
#before_day = (datetime.date.today() - relativedelta(months=1)).strftime('%Y%m%d')
#today = datetime.date.today().strftime('%Y%m%d')

key='3mKWpcqU6sKZVtaK0WjIQcg8WU5aHSCkGVwLilt%2FvWwE7TP9a0leTQfFtMzbUJmzsjelusNj3Q2XXX0VINWBMg%3D%3D'
url = f'http://apis.data.go.kr/1470000/FoodNtrIrdntInfoService/getFoodNtrItdntList?ServiceKey='+key+'&type=json'
#queryParams = urlencode({ quote_plus('pageNo') : 1,
#                          quote_plus('numOfRows') : 10,
#                          quote_plus('startCreateDt') : before_day,
#                          quote_plus('endCreateDt') : today})

queryParams = urlencode({ quote_plus('pageNo') : 1,
                          quote_plus('numOfRows') : 3})

#params = {"pageNo" : 1,
#	  "numOfRows" : 3,
#	  "ServiceKey" : "3mKWpcqU6sKZVtaK0WjIQcg8WU5aHSCkGVwLilt%2FvWwE7TP9a0leTQfFtMzbUJmzsjelusNj3Q2XXX0VINWBMg%3D%3D",
#	  "type" : json }

url2 = url + queryParams
response = urlopen(url2)
results = response.read().decode("utf-8")
#results_to_json = xmltodict.parse(results)
data = json.loads
print(type(data))   # dic
print(data)
