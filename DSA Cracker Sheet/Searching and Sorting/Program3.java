/* Java Progarm to Count triplet with sum smaller than a given value */

/* Brute Force Approach 

import java.util.Scanner;
class Program3
{
public static void main(String args[])
{
Scanner sc = new Scanner(System.in);
System.out.println("Enter the size of the Array");
int size = sc.nextInt();
int arr[] = new int[size];
System.out.println("Enter the Elements of the Array");
for(int i = 0;i<size;i++)
{
arr[i] = sc.nextInt();
}
System.out.println("Enter Your value to be Compared");
int cmp = sc.nextInt();
int Count = 0;
for(int i=0;i<size-2;i++)
{
for(int j=i+1;j<size-1;j++)
{
for(int k=j+1;k<size;k++)
{
if(arr[i] + arr[j] + arr[k] < cmp)
{
Count++;
}
}
}
}
System.out.println("The No of Triplets are "+Count);
}
}

  Time Complexity -- O(n3)
  Space Complexity -- O(1)
*/

/* Optimize Solution */

import java.util.Scanner;
class Program3
{
public static void main(String args[])
{
Scanner sc = new Scanner(System.in);
System.out.println("Enter the size of the Array");
int size = sc.nextInt();
int arr[] = new int[size];
System.out.println("Enter the Elements of the Array");
for(int i = 0;i<size;i++)
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
System.out.println("Enter Your value to be Compared");
int cmp = sc.nextInt();
int Count = 0;
for(int k=0;k<size-2;k++)
{
int i = k+1;
int j = size-1;
while(i<j)
{
int s = arr[i] + arr[j] + arr[k];
if(s<cmp)
{
Count = Count+(j-i);
i++;
}
else
{
j--;
}
}
}
System.out.println("The No of Triplets are "+Count);
}
} 


/* Time Complexity -- O(n2)
   Space Complexity -- O(1)
*/