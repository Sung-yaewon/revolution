import pandas as pd
df = pd.read_csv(r'food_nutrient.csv')
df.to_json(r'food_nutrient.json')
