#Read csv file

import csv
import matplotlib.pyplot as grafica

with open('Keyword_Stats.csv', 'r', encoding='utf16') as csv_file:
	csv_reader = csv.DictReader(csv_file, delimiter="\t")
	suma = 0
	promedio = 0
	longitud = 0
	for row in csv_reader:
		if(row["Top of page bid (high range)"] != None):
			# print(row["Top of page bid (high range)"])
			suma += float(row["Top of page bid (high range)"])
			longitud = longitud + 1

promedio = suma/longitud

print(promedio)

	lista = [row]

	
