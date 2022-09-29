/* Java Program to Find a pair with a Given Difference */

/* Brute Force Approach */

import java.util.Scanner;
class Program2
{
public static void main(String args[])
{
Scanner sc = new Scanner(System.in);
System.out.println("Enter the size of the Array");
int size = sc.nextInt();
int arr[] = new int[size];
System.out.println("Enter the Elements of the Array");
for(int i=0;i<size;i++)
{
arr[i] = sc.nextInt();
}
System.out.println("Enter the Difference value");
int diff = sc.nextInt();
int flag = 0;
System.out.println("The Pairs are as Follows");
for(int i=0;i<size-1;i++)
{
for(int j=i+1;j<size;j++)
{
if(arr[i] - arr[j] == diff ||  arr[j] -arr[i] == diff)
{
System.out.println("("+arr[i]+","+arr[j]+")");
flag = 1;
}
}
}
if(flag == 0)
{
System.out.println("The Pairs for the specified difference is not Found");
}
}
}


/* Time Complexity -- O(n2)
*/