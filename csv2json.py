import csv
import json

csv_file = open('itilBigDump.csv', 'r')
json_file = open('itilBigDump_category.json', 'w')

fieldnames = ("id", "question", "options", "correctAnswer", "category")
reader = csv.DictReader(csv_file, fieldnames, delimiter=';')
out = json.dumps([row for row in reader])
json_file.write(out)
