//Selection sort
#include<stdio.h>
#include<conio.h>
void Selectionsort(int[],int);
void Swap(int *a,int *b)
{
int temp;
temp=*a;
*a=*b;
*b=temp;
}
void Selectionsort(int array[],int size)
{
for(int i=0;i<size-1;i++)
{
int min=i;
for(int j=i+1;j<size;j++)
{
if(array[j]<array[min])
{
min=j;
}
}
if(min!=i)
{
Swap(&array[i],&array[min]);
}
}
}
void main()
{
int size;
printf("Enter the Size of the Array\n");
scanf("%d",&size);
int array[size];
printf("Enter the Array Elements\n");
for(int i=0;i<size;i++)
{
scanf("%d",&array[i]);
}
Selectionsort(array,size);
printf("Sorted Array in Ascending order\n");
for(int i=0;i<size;i++)
{
printf("%d\n",array[i]);
}
getch();
}




/*Selection sort-
Selection sort is a sorting algorithm that finds the smallest element form a unsorted 
list at each iteration and places it at the first of the unsorted list.


Best time complexity-O(n2)
Average time complexity-O(n2)
worst time complexity-O(n2)*/