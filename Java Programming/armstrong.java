// Java Program to Check whether given Number is Armstrong number or not

import java.util.*;
import java.lang.Math;
class armstrong{
public static void main(String args[]){
Scanner sc = new Scanner(System.in);
System.out.println("Enter your number");
int num = sc.nextInt();
int digit = num;
int count = 0;
double sum = 0,a;
while(num>0)
{
num=num/10;
count++;
}
System.out.println(count);
num=digit;
while(num>0)
{
a=num%10;
num=num/10;
sum = sum + Math.pow(a,count);
}
System.out.println(sum);
}
}