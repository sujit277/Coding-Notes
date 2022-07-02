/* Java Program for Selection Sort */

import java.util.Scanner;
class Selection
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
int min = i;
for(int j=i+1;j<size;j++)
{
if(arr[j]<arr[min])
{
min = j;
}
}
if(min!=i)
{
int temp = arr[min];
arr[min] = arr[i];
arr[i] = temp;
}
}
for(int i=0;i<size;i++)
{
System.out.println(arr[i]);
}
}
}


/* Best/Average/Worst Time Complexity -- O(n2)
   Space Time Complexity -- O(1)
*/