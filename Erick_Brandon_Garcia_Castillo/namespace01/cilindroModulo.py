def perimetroCirculo(radio):
    perimetro = 2*3.1416*radio

    return perimetro

def areaCirculo(radio):
    area = 3.1416*(radio**2)

    return area

def areasCilindro(altura, radio):
    areaLateral = perimetroCirculo(radio)*altura
    areaTotal = 2*areaCirculo(radio) + areaLateral

    return areaTotal

# radio = 3.20
# altura = 5 
#
# print(perimetroCirculo(radio))
# print(areaCirculo(radio))
# print(areasCilindro(altura, radio))
