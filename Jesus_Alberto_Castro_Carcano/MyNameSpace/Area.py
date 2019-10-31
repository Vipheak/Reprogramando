def perimetroCirculo(r):
    return 2 * 3.1416 * r;

def areaCirculo(r):
    return 3.1416 * r * r;


def areaCilindro(r , h):
    return perimetroCirculo(r) * h + 2 * areaCirculo(r);


r = 5;
h = 20;

# print(perimetroCirculo(r));
#
# print(areaCirculo(r));
#
# print(areaCilindro(r , h));
