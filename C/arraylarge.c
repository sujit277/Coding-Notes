/*finding the largest element out of the array*/
#include<stdio.h>
#include<conio.h>
void main()
{
int arr[20],size;
int large;
printf("enter the array size");
scanf("%d",&size);
printf("enter the array elements");
for(int i=0;i<size;i++)
{
scanf("%d",&arr[i]);
}
printf("array elements are");
for(int i=0;i<size;i++)
{
printf("%d\n",arr[i]);
}
large=arr[0];
for(int i=1;i<size;i++)
{
if(arr[i]>large)
{
large=arr[i];
}
}
printf("largest element in the array is %d",large);
getch();
}

