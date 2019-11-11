import csv
csv.register_dialect('myDialect',
delimiter = ',',
skipinitialspace=True)
with open('CP.csv', 'r') as csvFile:
    reader = csv.reader(csvFile, dialect='myDialect')
    for row in reader:
        print(row)
csvFile.close()
