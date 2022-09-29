/* Java Program to find Maximum and Minimum of Array using minimum no of Comparsion */

/* Brute Force Approach 

import java.util.Scanner;
class Program4
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
System.out.println("The Maximum Element of the Array is "+arr[size-1]);
System.out.println("The Minimum Element of the Array is "+arr[0]);
}
}

  Time Complexity -- O(n2)
  Space Complexity -- O(1)
*/


/* Optimize Solution */

import java.util.Scanner;
class Program4
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
int Max,Min;
if(size==1)
{
Max = arr[0];
Min = arr[0];
}
else
{
if(arr[0]>arr[1])
{
Max = arr[0];
Min = arr[1];
}
else
{
Max = arr[1];
Min = arr[0];
}
for(int i=2;i<size;i++)
{
if(arr[i]>Max)
{
Max = arr[i];
}
if(arr[i]<Min)
{
Min = arr[i];
}
}
}
System.out.println("Maxmimum ELement of the Array is "+Max);
System.out.println("Minimum Element of the Array is "+Min);
}
}

/* Time Complexity -- O(n)
   Space Complexity -- O(1)
*/