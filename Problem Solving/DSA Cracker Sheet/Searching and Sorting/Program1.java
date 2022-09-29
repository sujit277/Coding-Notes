/* Java Program to search an element in a sorted and rotated Array */

/* Brute Force Approach */

import java.util.Scanner;
class Program1
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
System.out.println("Enter the Element you want to search");
int srch = sc.nextInt();
for(int i=0;i<size;i++)
{
if(srch == arr[i])
{
System.out.println("Element is found at the Index "+i);
System.exit(0);
}
}
System.out.println("The Element is not in the Array");
System.exit(0);
}
}

/*   Time Complexity -- O(n)
     Space Complexity -- O(1)
*/