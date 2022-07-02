// Java Program to sort an Array in descending Order


import java.util.*;
class descending{
public static void main(String args[]){
Scanner sc =  new Scanner(System.in);
int size = sc.nextInt();
int arr[] = new int[size];
for(int i=0;i<size;i++)
{
arr[i] = sc.nextInt();
}
for(int i=0;i<size-1;i++)
{
for(int j=i+1;j<size;j++)
{
if(arr[i]<arr[j])
{
int temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;
}
}
}
System.out.println("Array Elements in descending order");
for(int i=0;i<size;i++)
{
System.out.println(arr[i]);
}
}
}