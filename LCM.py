def lcm(a, b):
    max_val = a if a > b else b
    lcm_val = max_val
    while True:
        if lcm_val % a == 0 and lcm_val % b == 0:
            return lcm_val
        lcm_val += max_val

x = int(input("Enter first integer: "))
y = int(input("Enter second integer: "))
print(f"LCM of {x} and {y} is {lcm(x, y)}")
