/* Java Program for Binary Search in the Array */

import java.util.Scanner;
class Binary
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
System.out.println("Enter the Element you want to Search");
int Ele = sc.nextInt();
int lower = 0;
int upper = size-1;
while(lower<=upper)
{
int mid = (lower+upper)/2;
if(Ele == arr[mid])
{
System.out.println("The Element is Present at the Index "+mid);
System.exit(0);
}
else if(Ele <arr[mid])
{
upper = mid-1;
}
else
{
lower = mid+1;
}
}
System.out.println("ELement is not found in the Array");
System.exit(0);
}
}


/* Best Time Complexity -- O(1)
   Average Time Complexity -- O(log(n))
   Worst Time Complexity -- O(log(n)) 
   Space Complexity -- O(1)
*/