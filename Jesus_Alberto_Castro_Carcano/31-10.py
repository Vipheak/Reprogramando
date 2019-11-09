f = open ('ArchivoNuevo.txt','w')
f.write('Aqui no hay nada')

f = open('ArchivoNuevo.txt' , 'a')
f.write('\n' + 'Aqui no hay nada')

f = open('ArchivoNuevo.txt' , 'a')
f.write('\n' + 'Ya no se que mas escribir')

f.close()
