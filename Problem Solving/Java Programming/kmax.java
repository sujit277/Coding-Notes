//Java Program to find the kth maximum and minimum element in an array

import java.util.*;
class kmax{
public static void main(String args[]){
Scanner sc =  new Scanner(System.in);
int size = sc.nextInt();
int arr[] = new int[size];
for(int i=0;i<size;i++)
{
arr[i] = sc.nextInt();
}
System.out.println("Enter the Kth Value");
int k = sc.nextInt();
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
System.out.println("Array Kth Maximum Element "+arr[size-1-(k-1)]);
System.out.println("Array Kth Minimum Element "+arr[0+k-1]);
}
}