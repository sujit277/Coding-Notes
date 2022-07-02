/*Java Program to find the First & last Occurance of the Specific Element in the Array*/

/* Brute Force Approach */

import java.util.Scanner;
class Program5
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
System.out.println("Enter the ELement you want to Search");
int ele = sc.nextInt();
int first =-1,last=-1;
for(int i=0;i<size;i++)
{
if(arr[i]!=ele)
{
continue;
}
if(first == -1)
{
first = i;
}
last = i;
}
System.out.println("The First Occurance of "+ele+" is at "+first);
System.out.println("The Last Occurance of "+ele+" is at "+last);
}
}

/* Time Complexity -- O(n)
   Space Complexity -- O(1)
*/