/* Minimum no. of swaps required to sort the Array */

/* Brute Force Approach */

import java.util.Scanner;
class Program11
{
public static void main(String args[])
{
Scanner sc = new Scanner(System.in);
System.out.println("Enter the Size of the Array");
int size = sc.nextInt();
int arr[] = new int[size];
System.out.println("Enter the Elements of the Array");
for(int i=0;i<size;i++)
{
arr[i] = sc.nextInt();
}
int Count=0;
for(int i=0;i<size-1;i++)
{
for(int j=i+1;j<size;j++)
{
if(arr[i]>arr[j])
{
Count++;
}
}
}
System.out.println(Count);
}
}