/* Java Program for Quick Sort */

import java.util.Scanner;
class Insertion
{
public static void main(String args[])
{
Scanner sc = new Scanner(System.in);
System.out.println("Enter the Size of the Array");
int size = sc.nextInt();
int arr[] = new int[size];
System.out.println("Enter the size of the Array");
for(int i=0;i<size;i++)
{
arr[i] = sc.nextInt();
}
for(int i=0;i<size;i++)
{
int temp = arr[i];
int j = i-1;
while(j>=0 && arr[j] > temp)
{
arr[j+1] = arr[j];
j--;
}
arr[j+1] = temp;
}
System.out.println("Sorted Array Elements are");
for(int k=0;k<size;k++)
{
System.out.println(arr[k]);
}
}
}


/* Worst Time Complexity -- O(n2)
   Average Time Complexity -- O(n2)
   Best Time Complexity -- O(n)
   Space Complexity -- O(1)
*/