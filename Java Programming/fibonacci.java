//Java Program to find the fiboncci series to of specific Range

import java.util.*;
class fibonacci{
public static void main(String args[])
{
Scanner sc = new Scanner(System.in);
System.out.println("Enter the Range value");
int num = sc.nextInt();
int n1=0,n2=1,n,count=0;
if(num==0)
{
System.out.println("Please Enter Positive Number");
}
else if(num==1)
{
System.out.println("The fibonacci Series is 0");
}
else
{
System.out.println("The Fibonacci series is");
while(count<num)
{
System.out.println(n1);
n=n1+n2;
n1=n2;
n2=n;
count++;
}
}
}
}