def factorial(integer):
    if integer == 0:
        return 1
    else:
        return integer * factorial(integer-1)

def main():
    number = int(input("Enter a number: "))
    if number < 0:
        print("Input a positive number bro")
    else:
        print(f"The factorial of {number} is {factorial(number)}")

if __name__ == "__main__":
    main()