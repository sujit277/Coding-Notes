//Counting Sort
#include<stdio.h>
#include<conio.h>
void Countsort(int array[],int size)
{
int max=array[0];
for(int i=1;i<size;i++)
{
if(array[i]>max)
{
max=array[i];
}
}
int arraycount[max];
int arraynew[size];
for(int i=0;i<=max;i++)
{
arraycount[i]=0;
}
for(int i=0;i<size;i++)
{
arraycount[array[i]]++;
}
for(int i=1;i<=max;i++)
{
arraycount[i]=arraycount[i-1]+arraycount[i];
}
for(int i=size-1;i>=0;i--)
{
arraynew[--arraycount[array[i]]]=array[i];
}
for(int i=0;i<size;i++)
{
array[i]=arraynew[i];
}
}
void main() 
{
int size, max;
printf("Enter the size of the array\n");
scanf("%d",&size);
int array[size];
printf("Enter the array elements\n");
for(int i=0;i<size;i++)
{
scanf("%d",&array[i]);
}
Countsort(array,size);
printf("Sorted array: \n");
for(int i=0;i<size;i++)
{
printf("%d\n",array[i]);
}
getch();
}
