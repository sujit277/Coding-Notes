/* Searching in an array where adjacent differ by at most k */

/* Brute Force Approach */

import java.util.Scanner;
class Program10
{
public static void main(String args[])
{
Scanner sc = new Scanner(System.in);
System.out.println("Enter the size of the Array");
int size = sc.nextInt();
int arr[] = new int[size];
System.out.println("Enter The Elements of the Array");
for(int i=0;i<size;i++)
{
arr[i] = sc.nextInt();
}
System.out.println("Enter the Difference Value");
int diff = sc.nextInt();
System.out.println("Enter the value you want to search");
int srch = sc.nextInt();
for(int i=0;i<size;i++)
{
if(arr[i] == srch)
{
System.out.println("The ELement is present at Index "+i);
System.exit(0);
}
}
}
}

/* Time Complexity -- O(n)
   Space Complexity -- O(1)
*/