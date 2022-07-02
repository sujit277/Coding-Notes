//Java program to find the LCM and HCF of two Numbers

import java.util.*;
class lcm{
public static void main(String args[])
{
Scanner sc = new Scanner(System.in);
System.out.println("Enter First number");
int num1 = sc.nextInt();
System.out.println("Enter Second number");
int num2 = sc.nextInt();
int max,lcm,hcf;
if(num1>num2)
{
max=num1;
}
else
{
max=num2;
}
while(true)
{
if(max%num1==0 && max%num2==0)
{
System.out.println("LCM of the two numbers is "+max);
break;
}
max++;
}
hcf = (num1*num2)/max;
System.out.println("HCF of the two Number is "+hcf);
}
}