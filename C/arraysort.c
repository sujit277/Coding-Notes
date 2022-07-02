/*removing dupliacte element from a sorted array*/
#include<stdio.h>
#include<conio.h>
int function(int*,int);
void main()
{
int n;
printf("enter the array size");
scanf("%d",&n);
int a[n];
printf("enter the array elements");
for(int i=0;i<n;i++)
{
scanf("%d",&a[i]);
}
n=function(a,n);
for(int i=0;i<n;i++)
{
printf("%d\n",a[i]);
}
getch();
}
int function(int a[],int n)
{
if(n==0||n==1)
{
return n;
}
int j=0;
int b[n];
for(int i=0;i<n-1;i++)
{
if(a[i]!=a[i+1])
{
b[j++]=a[i];
}
}
b[j++]=a[n-1];
for(int i=0;i<j;i++)
{
a[i]=b[i];
}
return j;
}
