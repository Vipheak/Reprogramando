f = open('filestream.txt', 'r')

#if f.mode == 'r':
#	contents = f.read()
#	print(contents)

f1 = f.readlines()

for x in f1:
	print(x)

f.close()