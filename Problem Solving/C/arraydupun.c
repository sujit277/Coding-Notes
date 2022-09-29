/*removing duplicate element from unsorted array*/
#include<stdio.h>
#include<conio.h>
int duplicate(int[],int);
void main()
{
int num[20],a,size; 
printf("enter the size of array\n");
scanf("%d",&size);
printf("enter array elements\n");
for(int i=0;i<size;i++)
{
scanf("%d",&num[i]);
}
for(int i=0;i<size;i++)
{
for(int j=i+1;j<size;j++)
{
if(num[i]>num[j])
{
a=num[i];
num[i]=num[j];
num[j]=a;
}
}
}
for(int i=0;i<size;i++)
{
printf("%d\n\n",num[i]);
}
size=duplicate(num,size);
for(int i=0;i<size;i++)
{
printf("%d\n\n",num[i]);
}
getch();
}
int duplicate(int num[],int size)
{
if(size==1)
{
return size;
}
if(size==0)
{
printf("Please enter positive number");
}
int temp[size];
int j=0;
for(int i=0;i<size-1;i++)
{
if(num[i]!=num[i+1])
{
temp[j++]=num[i];
}
}
temp[j++]=num[size-1];
for(int i=0;i<j;i++)
{
num[i]=temp[i];
}
return j;
} 