#include<stdio.h>
#include<conio.h>
int Binarysearch(int[],int,int);
int Binarysearch(int array[],int size,int element)
{
int lower=0;
int upper=size-1;
int mid;
while(lower<=upper)
{
mid=(lower+upper)/2;
if(array[mid]==element)
{
return mid;
}
else if(element<array[mid])
{
upper=mid-1;
}
else
{
lower=mid+1;
}
}
return -1;
}
void main()
{
int size,element;
printf("Enter the size of the Array\n");
scanf("%d",&size);
int array[size];
printf("Enter the array Elements\n");
for(int i=0;i<size;i++)
{
scanf("%d",&array[i]);
}
printf("Enter the Element you want to search\n");
scanf("%d",&element);
int y=Binarysearch(array,size,element);
if(y!=-1)
printf("Element is Present at Index %d",y);
else
printf("Element is not Found");
getch();
}