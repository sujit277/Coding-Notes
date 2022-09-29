//Insertion sort
#include<stdio.h>
#include<conio.h>
void Insertionsort(int array[],int size)
{
for(int i=1;i<size;i++)
{
int temp=array[i];
int j=i-1;
while(j>=0 && array[j]>temp)
{
array[j+1]=array[j];
j--;
}
array[j+1]=temp;
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
Insertionsort(array,size);
printf("Sorted Array in Ascending order\n");
for(int i=0;i<size;i++)
{
printf("%d\n",array[i]);
}
getch();
}


/*Insertion sort-
Insertion sort is a sorting algorithm that places unsorted element at its suitable place
in each iteration. 



Best time complexity-O(n)
Average time complexity-O(n2)
Worst time complexity-O(n2)*/