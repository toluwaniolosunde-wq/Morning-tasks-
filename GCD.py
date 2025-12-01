def gcd(a, b):
    smaller = a if a < b else b
    result = 1
    for i in range(2, smaller + 1):
        if a % i == 0 and b % i == 0:
            result = i
    return result

x = int(input("Enter first integer: "))
y = int(input("Enter second integer: "))
print(f"GCD of {x} and {y} is {gcd(x, y)}")