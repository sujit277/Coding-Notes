/* Java Program for Linear Search in the Array */

import java.util.Scanner;
class Linear
{
public static void main(String args[])
{
Scanner sc = new Scanner(System.in);
System.out.println("Enter the size of the Array");
int size = sc.nextInt();
int arr[] = new int[size];
System.out.println("Enter the Elements of the Array");
for(int i= 0;i<size;i++)
{
arr[i] = sc.nextInt();
}
System.out.println("Enter the Element you want to search");
int srch = sc.nextInt();
for(int i=0;i<size;i++)
{
if(arr[i] == srch)
{
System.out.println("Element is Present at the index "+i);
System.exit(0);
}
}
System.out.println("Element is not Present in the Array");
System.exit(0);
}
}


/* Average/Best/Worst Time Complexity -- O(n) 
   Space Complexity - O(1)   
*/