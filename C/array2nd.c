/*finding second largest element of array*/
#include<stdio.h>
#include<conio.h>
void main()
{
int a[20],size,c;
printf("enter the size\n");
scanf("%d",&size);
printf("enter the elements\n");
for(int i=0;i<size;i++)
{
scanf("%d",&a[i]);
}
int j;
for(int i=0;i<size;i++)
{
for(int j=i+1;j<size;j++)
{
if(a[i]<a[j])
{
c=a[i];
a[i]=a[j];
a[j]=c;
}
}
}
for(int i=0;i<size;i++)
{
printf("%d\n\n",a[i]);
}
printf("%d is the largest element of the array",a[0]);
printf("%d is the 2nd largest element of the array",a[1]);
getch();
}