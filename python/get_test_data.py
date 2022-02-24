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
before_day = (datetime.date.today() - relativedelta(months=1)).strftime('%Y%m%d')
today = datetime.date.today().strftime('%Y%m%d')

key='B%2FNiJnYmkZV1%2FK7ulvZI4MoSXvCTDfNAd0Snw%2Bk6g4%2BbMk1LoGVhd75DJahjv4K35Cr9jh9RX0j%2BM89grKBYsw%3D%3D'
url = f'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey={key}&'
queryParams = urlencode({ quote_plus('pageNo') : 1,
                          quote_plus('numOfRows') : 10,
                          quote_plus('startCreateDt') : before_day,
                          quote_plus('endCreateDt') : today})
url2 = url + queryParams
response = urlopen(url2)
results = response.read().decode("utf-8")
results_to_json = xmltodict.parse(results)
data = json.loads(json.dumps(results_to_json))
print(type(data))   # dic
print(data)
