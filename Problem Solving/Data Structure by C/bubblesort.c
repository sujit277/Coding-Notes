//Bubble Sort
#include<stdio.h>
#include<conio.h>
void Bubblesort(int[],int);
void Bubblesort(int array[],int size)
{
for(int i=0;i<size-1;i++)
{
int flag=0;
int temp;
for(int j=0;j<size-1-i;j++)
{
if(array[j]>array[j+1])
{
temp=array[j];
array[j]=array[j+1];
array[j+1]=temp;
flag=1;
}
}
if(flag==0)
break;
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
Bubblesort(array,size);
printf("Sorted Array in Ascending order\n");
for(int i=0;i<size;i++)
{
printf("%d\n",array[i]);
}
getch();
}



/*Note on Bubble sort-
Bubble sort is a sorting algorithm that compares the adjacent elements and swaps them if
they are not in the intended order.the order can be ascending or it can be descending.

time complexity of algorithm-
it is the time taken by the algorithm for the exceution till its completion.

space complexity of algorithm-
it is the storage space taken by the algorithm. 


Best time complexity=O(n)
Average time complexity=O(n2)
Worst time complexity=O(n2)*/