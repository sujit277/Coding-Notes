/* Find a Fixed Point (Value equal to index) in a given array */

/* Brute Force Approach */

import java.util.Scanner;
class Program8
{
public static void main(String args[])
{
Scanner sc = new Scanner(System.in);
System.out.println("Enter the size of the Array");
int size = sc.nextInt();
int arr[] = new int[size];
System.out.println("Enter the ELements of the Array");
for(int i=0;i<size;i++)
{
arr[i] = sc.nextInt();
}
for(int i=0;i<size;i++)
{
if(arr[i] == i)
{
System.out.println("Value equal to Index "+i);
}
}
}
}

/* Time Complexity -- O(n) 
   Space Complexity --O(1)
*/