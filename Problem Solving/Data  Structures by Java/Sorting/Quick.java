/* Java Program for Quick Sort */

import java.util.Scanner;
class Quick
{
public static int Partion(int arr[],int lower,int upper)
{
int start = lower;
int end = upper;
int pivot = arr[lower];
while(start<end)
{
while(arr[start]<pivot)
{
start++;
}
while(arr[end]>pivot)
{
end--;
}
if(start<end)
{
int temp = arr[start];
arr[start] = arr[end];
arr[end] = temp;
}
}
int tempnew = arr[end];
arr[end] = arr[lower];
arr[lower] = tempnew;
return end;
}
public static void Quicksort(int arr[],int lower,int upper)
{
if(lower<upper)
{
int loc = Partion(arr,lower,upper);
Quicksort(arr,lower,loc-1);
Quicksort(arr,loc+1,upper);
}
}
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
Quicksort(arr,0,size-1);
System.out.println("Sorted Array Elements are");
for(int i=0;i<size;i++)
{
System.out.println(arr[i]);
}
}
}