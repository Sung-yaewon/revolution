# import pandas as pd
# import json

# csv_data = pd.read_csv("food_nutrient.csv", sep = ",")
# csv_data.to_json("food_nutrient.json", orient = "records")

import csv
import json

#csvfile = open('food_nutrient.csv', 'r')
#jsonfile = open('food_nutrient.json', 'w')

csv_file1 = 'food_nutrient.csv'
json_path1 = 'food_nutrient.json'

data = []
with open(csv_file1, 'rt', encoding='UTF-8') as data_csv:
    csv_reader = csv.DictReader(data_csv)
    for csvrows in csv_reader:
        data.append(csvrows)
with open(json_path1, 'wt', encoding='UTF-8') as data_json:
    data_json.write(json.dumps(data, indent=4, sort_keys=True, ensure_ascii=False))
