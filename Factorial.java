public class Factorial {
    public static long factorial(int n) {
        if (n == 0) return 1;
        long result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int number = input.nextInt();
        if (number < 0) {
            System.out.println("Please enter a non‑negative integer.");
        } else {
            System.out.println("The factorial of " + number + " is " + factorial(number));
        }
        input.close();
    }
}