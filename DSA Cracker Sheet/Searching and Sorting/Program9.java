/* Java Program to find the Sqaure Root of any Number */

/* Brute Force Approach */

import java.util.Scanner;
class Program9
{
public static void main(String args[])
{
Scanner sc = new Scanner(System.in);
System.out.println("Enter your Number");
int num = sc.nextInt();
int result=1,i=1;
while(result<=num)
{
i++;
result = i*i;
}
System.out.println("Square Root of "+num+" is "+(i-1)); 
}
}

/* Time Complexity -- O(Sqtrt(n))
   Space Complexity -- O(1)
*/