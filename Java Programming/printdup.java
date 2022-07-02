//Java Program to print the Repeated Elements in an Array

import java.util.*;
class printdup{
public static void main(String args[])
{
Scanner sc = new Scanner(System.in);
System.out.println("Enter the size of the array");
int size = sc.nextInt();
int arr[] = new int[size];
int count;
System.out.println("Enter the Elements of the Array");
for(int i=0;i<size;i++)
{
arr[i] = sc.nextInt();
}
System.out.println("The Repeated Array Elements in the Array are");
for(int i=0;i<size-1;i++)
{
count = 1;
for(int j=i+1;j<size;j++)
{
if(arr[i]==arr[j])
{
if(count==1 && arr[j]!='\0')
{
System.out.println(arr[i]);
}
arr[j]='\0';
count++;
}
}
}
}
}