//Quick sort
#include<stdio.h>
#include<conio.h>
void Swap(int *a,int *b)
{
int temp=*a;
*a=*b;
*b=temp;
}
int partition(int array[],int lower,int upper)
{
int start=lower;
int end=upper;
int pivot=array[lower];
while(start<end)
{
while(array[start]<=pivot)
{
start++;
}
while(array[end]>pivot)
{
end--;
}
if(start<end)
{
Swap(&array[start],&array[end]);
}
}
Swap(&array[lower],&array[end]);
return end;
}
void Quicksort(int array[],int lower,int upper)
{
if(lower<upper)
{
int loc=partition(array,lower,upper);
Quicksort(array,lower,loc-1);
Quicksort(array,loc+1,upper);
}
}
void main()
{
int size;
printf("Enter the size of array");
scanf("%d",&size);
int array[size];
printf("Enter the array elements");
for(int i=0;i<size;i++)
{
scanf("%d",&array[i]);
}
Quicksort(array,0,size-1);
printf("Elements are in Sorted order\n");
for(int i=0;i<size;i++)
{
printf("%d\n",array[i]);
}
getch();
}