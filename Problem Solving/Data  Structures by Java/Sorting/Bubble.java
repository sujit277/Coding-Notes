/* Java Program for Bubble Sorting */

import java.util.Scanner;
class Bubble
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
System.out.println("Sorted Array Elements are");
for(int i=0;i<size-1;i++)
{
for(int j=i+1;j<size;j++)
{
if(arr[i]>arr[j])
{
int temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;
}
}
}
for(int i=0;i<size;i++)
{
System.out.println(arr[i]);
}
}
}


/* Best Time Complexity -- O(n)
   Worst Time Complexity -- O(n2)
   Average Time Complexity -- O(n2)
*/