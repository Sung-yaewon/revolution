import urllib
import requests
import json

url = 'http://openapi.foodsafetykorea.go.kr/api/a33772d88f354d1b9d07/sample/json/1/3'

data = urllib.request.urlopen(url).read()
print(data)
