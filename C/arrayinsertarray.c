/*inserting one array element int another array*/
#include<stdio.h>
#include<conio.h>
void main()
{
int a[20],b[20],asize,bsize,loc;
printf("enter the size of a array\n");
scanf("%d",&asize);
for(int i=0;i<asize;i++)
{
scanf("%d",&a[i]);
}
for(int i=0;i<asize;i++)
{
printf("%d\n",a[i]);
}
printf("enter the size of b array\n");
scanf("%d",&bsize);
for(int i=0;i<bsize;i++)
{
scanf("%d",&b[i]);
}
for(int i=0;i<bsize;i++)
{
printf("%d\n",b[i]);
}
printf("enter the location to insert the array");
scanf("%d",&loc);
for(int i=asize-1;i>=loc;i--)
{
a[i+bsize]=a[i];
}
for(int i=0;i<bsize;i++)
{
a[i+loc]=b[i];
}
for(int i=0;i<bsize+asize;i++)
{
printf("%d",a[i]);
}
getch();
}


