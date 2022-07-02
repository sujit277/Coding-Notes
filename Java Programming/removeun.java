//Java Program to Remove Duplicate Elements from a unSorted Array

import java.util.*;
class removeun{
public static int removedup(int size, int arr[])
{
if(size==1)
{
return size;
}
int c = 0;
int newarr[] = new int[size];
for(int i=0;i<size-1;i++)
{
if(arr[i]!=arr[i+1])
{
newarr[c++]=arr[i];
}
}
newarr[c++]=arr[size-1];
for(int i=0;i<c;i++)
{
arr[i] = newarr[i];
}
return c;
}
public static void main(String args[])
{
Scanner sc = new Scanner(System.in);
System.out.println("Enter the size of the array");
int size = sc.nextInt();
if(size==0)
{
System.out.println("Hello");
}
int arr[] = new int[size];
System.out.println("Enter the Array Elements");
for(int i=0;i<size;i++)
{
arr[i]=sc.nextInt();
}
System.out.println("Array Elments are");
for(int i=0;i<size;i++)
{
System.out.println(arr[i]);
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
int s = removedup(size,arr);
System.out.println("The Distinct Array Element are");
for(int i=0;i<s;i++)
{
System.out.println(arr[i]);
} 
}
}