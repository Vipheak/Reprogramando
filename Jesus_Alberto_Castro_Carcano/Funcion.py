def f(x):
    return 16 + x * 4;

def suma(a , b):
    return a + b;

def sumatoria(numeros):
    sum = 0;

    for numero in numeros:
        sum += numero;

    return sum;

numeros = [1 , 2 , 3 , 4];

def productorio(numbers):
    prod = 1;

    for number in numbers:
        prod *= number;

    return prod;

numbers = [15 , 28 , 37, 44];

print(productorio(numbers));

print(sumatoria(numeros));

print(f(8));

print(suma(8 , 9));
