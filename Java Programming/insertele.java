// java program to insert a Element into an Array

import java.util.*;
class insertele
{
public static void main(String args[])
{
Scanner sc = new Scanner(System.in);
System.out.println("Enter the size of the Array");
int size = sc.nextInt();
int arr[] = new int[20];
System.out.println("Enter the Elements of the Array");
for(int i=0;i<size;i++)
{
arr[i] = sc.nextInt();
}
System.out.println("Enter the Element which you want to insert");
int input = sc.nextInt();
System.out.println("Enter the Location Where you want to insert Element");
int loc = sc.nextInt();
for(int i=size-1;i>=loc;i--)
{
arr[i+1]=arr[i];
}
arr[loc] = input;
System.out.println("Updated Array Element are");
for(int i=0;i<=size;i++)
{
System.out.println(arr[i]);
}
}
}