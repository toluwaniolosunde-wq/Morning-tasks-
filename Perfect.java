public class Perfect{
public static boolean sumOfFactors(int number){


	
int sumOfFactors =0;
for (int factor = 1; factor < number; factor++){
if(number % factor == 0){
sumOfFactors= sumOfFactors + factor;
}
}
	return sumOfFactors == number;
}
public static void main(String [] args){


		System.out.println(sumOfFactors(8128));
}
}


