/* C program to remove duplicate elements in a sorted  array */
#include<stdio.h>
#include<conio.h>
int remove_duplicate_elements(int arr[], int n)
{
if(n==0||n==1)
return n;
int temp[n];
int j=0;
int i;
for(i=0;i<n-1;i++)
if(arr[i]!= arr[i+1])
{
temp[j++]=arr[i];
}
temp[j++]=arr[n-1];
for(i=0;i<j;i++)
{
arr[i]=temp[i];
}
return j;
}
void main()
{
int n;
printf("enter the size of array\n");
scanf("%d",&n);
int arr[n];
int i;
for(i=0;i<n;i++)
{
scanf("%d",&arr[i]);
}
n=remove_duplicate_elements(arr, n);
for(i=0;i<n;i++)
printf("%d",arr[i]);
getch();
}