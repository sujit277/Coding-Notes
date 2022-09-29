//Java Program to check Whether a given Number is Perfect number or not

import java.util.*;
class perfect{
public static void main(String args[])
{
Scanner sc = new Scanner(System.in);
System.out.println("Enter your Number");
int number = sc.nextInt();
int sum = 0;
for(int i=1;i<number;i++)
{
if(number%i == 0)
{
sum = sum+i;
}
}
if(sum==number)
{
System.out.println(number+" is the Perfect Number");
}
else
{
System.out.println(number+" is not the Perfect Number");
}
}
}