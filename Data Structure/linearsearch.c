//Linear search
#include<stdio.h>
#include<conio.h>
void Linearsearch(int[],int,int);
void Linearsearch(int array[],int size,int element)
{
int i;
for(int i=0;i<size;i++)
{
if(array[i]==element)
{
printf("Element is Present at the Index %d",i);
break;
}
}
if(i==size)
{
printf("Element not found\n");
}
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
Linearsearch(array,size,element);
getch();
}
