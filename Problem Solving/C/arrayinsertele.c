/*inserting an element into an array*/
#include<stdio.h>
#include<conio.h>
void main()
{
int a[20],size,item,loc;
printf("enter the a array size\n");
scanf("%d",&size);
printf("enter the element of array\n");
for(int i=0;i<size;i++)
{
scanf("%d",&a[i]);
}
for(int i=0;i<size;i++)
{
printf("%d\n",a[i]);
}
printf("enter the location where you want to insert the element\n");
scanf("%d",&loc);
printf("enter the element to insert\n");
scanf("%d",&item);
for(int i=size-1;i>=loc;i--)
{
a[i+1]=a[i];
}
a[loc]=item;
for(int i=0;i<=size;i++)
{
printf("%d\n",a[i]);
}
getch();
}
