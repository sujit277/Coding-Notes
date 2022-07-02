//Java Program to print the Prime numbers within a given range and sum of all the prime Numbers
//within that range

import java.util.*;
class primerange{
public static void main(String args[])
{
Scanner sc = new Scanner(System.in);
System.out.println("Enter the lower range value");
int low = sc.nextInt();
System.out.println("Enter the higher range value");
int high = sc.nextInt();
int sum=0,count;
System.out.println("Prime numbers within that Range");
for(int i=low;i<=high;i++)
{
count=0;
for(int j=1;j<=i;j++)
{
if(i%j==0)
{
count++;
}
}
if(count==2)
{
System.out.println(i);
sum = sum+i;
}
}
System.out.println("Sum of all the Prime numbers within that range "+sum);
}
}