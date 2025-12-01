def is_armstrong(n):
    if n < 0:
        return False
    temp = n
    digits = 0
    while temp != 0:
        digits += 1
        temp //= 10
    temp = n
    total = 0
    while temp != 0:
        digit = temp % 10
        power = 1
        for _ in range(digits):
            power *= digit
        total += power
        temp //= 10
    return total == n

num = int(input("Enter a non-negative integer: "))
if is_armstrong(num):
    print(f"{num} is an Armstrong number.")
else:
    print(f"{num} is not an Armstrong number.")
