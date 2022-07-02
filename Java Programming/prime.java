//Java Program to check whether a given Number is prime number or not

import java.util.*;
class prime{
public static void main(String args[])
{
Scanner sc = new Scanner(System.in);
System.out.println("Enter your Number");
int count = 0;
int num = sc.nextInt();
for(int i=1;i<=num;i++)
{
if(num%i==0)
{
count++;
}
}
if(count==2)
{
System.out.println(num+" is the Prime Number");
}
else
{
System.out.println(num+" is not the Prime Number");
}
}
}