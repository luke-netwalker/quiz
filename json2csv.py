import json
import csv

# Apertura del file JSON
with open('itilBigDump.json', 'r') as json_file:
    data = json.load(json_file)

# Apertura del file CSV
with open('itilBigDump.csv', 'w', newline='') as csv_file:
    writer = csv.writer(csv_file, delimiter='|')

    # Scrittura delle intestazioni delle colonne
    writer.writerow(data[0].keys())

    # Scrittura dei dati
    for row in data:
        writer.writerow(row.values())