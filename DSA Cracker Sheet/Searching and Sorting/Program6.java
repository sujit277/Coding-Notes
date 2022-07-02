/* Java Program to find the Kth Element of two Sorted Array */

/* Brute Force Approach 

import java.util.Scanner;
class Program6
{
public static void main(String args[])
{
Scanner sc = new Scanner(System.in);
System.out.println("Enter the size of the first Array");
int size1 = sc.nextInt();
int arr1[] = new int[size1];
System.out.println("Enter the Elements of the Array");
for(int i=0;i<size1;i++)
{
arr1[i] = sc.nextInt();
}
System.out.println("Enter the size of the second Array");
int size2 = sc.nextInt();
int arr2[] = new int[size2];
System.out.println("Enter the Elements of the second Array");
for(int i=0;i<size2;i++)
{
arr2[i] = sc.nextInt();
}
int arr[] = new int[size1+size2];
int Count = 0;
for(int i=0;i<size1;i++)
{
arr[Count++] = arr1[i];
}
for(int i=0;i<size2;i++)
{
arr[Count++] = arr2[i];
}
System.out.println("Concatenated Array is");
for(int i=0;i<size1+size2;i++)
{
System.out.println(arr[i]);
}
System.out.println("Enter the value of the K");
int k = sc.nextInt();
for(int i=0;i<(size1+size2)-1;i++)
{
for(int j=i+1;j<size1+size2;j++)
{
if(arr[i]>arr[j])
{
int temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;
}
}
}
System.out.println("Sorted Array Element are");
for(int i=0;i<size1+size2;i++)
{
System.out.println(arr[i]);
}
System.out.println("The "+k+"th"+" Element of the Array is "+arr[0+k-1]);
}
}


 Time Complexity -- O(n2) {Considering n=m+n}
 Space Complexity -- O(m+n)
*/

/* Optimal Approach */

import java.util.Scanner;
class Program6
{
public static void main(String args[])
{
Scanner sc = new Scanner(System.in);
System.out.println("Enter the size of the first Array");
int size1 = sc.nextInt();
int arr1[] = new int[size1];
System.out.println("Enter the Elements of the Array");
for(int i=0;i<size1;i++)
{
arr1[i] = sc.nextInt();
}
System.out.println("Enter the size of the second Array");
int size2 = sc.nextInt();
int arr2[] = new int[size2];
System.out.println("Enter the Elements of the second Array");
for(int i=0;i<size2;i++)
{
arr2[i] = sc.nextInt();
}
int arr[] = new int[size1+size2];
int Count = 0;
int i=0,j=0;
while(i<size1 && j<size2)
{
if(arr1[i]<arr2[j])
{
arr[Count++] = arr1[i++];
}
else
{
arr[Count++] = arr2[j++];
}
}
while(i<size1)
{
arr[Count++] = arr1[i++];
}
while(j<size2)
{
arr[Count++] = arr2[j++];
}
System.out.println("Concatenated Sorted Array Elements are");
for(int k=0;k<Count;k++)
{
System.out.println(arr[k]);
}
System.out.println("Enter the value of k");
int knew = sc.nextInt();
System.out.println("The "+knew+" th "+"ELement of the Array is "+arr[knew-1]);
}
}


/* Time Complexity -- O(m+n)
   Space Complexity -- O(m+n)
*/