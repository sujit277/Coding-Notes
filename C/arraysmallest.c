//Finding the smallest element of the array
#include<stdio.h>
#include<conio.h>
void main()
{
int a[20],size,c;
printf("enter the size");
scanf("%d",&size);
printf("enter the array elements");
for(int i=0;i<size;i++)
{
scanf("%d",&a[i]);
}
for(int i=0;i<size-1;i++)
{
for(int j=i+1;j<size;j++)
{
if(a[i]>a[j])
{
c=a[j];
a[j]=a[i];
a[i]=c;
}
}
}
for(int i=0;i<size;i++)
{
printf("%d\n",a[i]);
}
printf("%d is the smallest number\n",a[0]);
printf("%d is the 2nd smallest smallest number",a[1]);
getch();
}
