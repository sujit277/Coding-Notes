//Java Program to insert an Array into another Array

import java.util.*;
class insertarr
{
public static void main(String args[])
{
Scanner sc = new Scanner(System.in);
System.out.println("Enter the size of the original Array");
int size1 = sc.nextInt();
System.out.println("Enter the Original Array ELements");
int arr1[] = new int[40];
for(int i=0;i<size1;i++)
{
arr1[i] = sc.nextInt();
}
System.out.println("Enter the size of the Array to be Array");
int size2 = sc.nextInt();
System.out.println("Enter the Array to be Inserted ELements");
int arr2[] = new int[40];
for(int i=0;i<size2;i++)
{
arr2[i] = sc.nextInt();
}
System.out.println("Enter the Location Where you want to insert Array");
int loc = sc.nextInt();
for(int i=size1-1;i>=loc;i--)
{
arr1[i+size2] = arr1[i];
}
for(int i=0;i<size2;i++)
{
arr1[loc+i] = arr2[i];
}
System.out.println("Updated Array Elements are");
for(int i=0;i<size1+size2;i++)
{
System.out.println(arr1[i]);
}
}
}