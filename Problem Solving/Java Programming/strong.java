//Java Program to Check whether a given Number is Strong number or not

import java.util.*;
class strong
{
static int fact(int a)
{
int facto=1;
for(int i=1;i<=a;i++)
{
facto=facto*i;
}
return facto;
}
public static void main(String args[])
{
Scanner sc = new Scanner(System.in);
System.out.println("Enter Your Number");
int num = sc.nextInt();
int digit = num;
int sum=0,a;
while(num>0)
{
a=num%10;
num=num/10;
sum=sum+fact(a);
}
if(digit==sum)
{
System.out.println(digit+" is the Strong Number");
}
else
{
System.out.println(digit+" is not the Strong Number");
}
}
}