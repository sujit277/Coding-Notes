/*sorting an in ascending order array element*/
#include<stdio.h>
#include<conio.h>
void main()
{
int num[20],a,size; 
printf("enter the size of array");
scanf("%d",&size);
printf("enter array elements");
for(int i=0;i<size;i++)
{
scanf("%d",&num[i]);
}
for(int i=0;i<size-1;i++)
{
for(int j=i+1;j<size;j++)
{
if(num[i]>num[j])
{
a=num[i];
num[i]=num[j];
num[j]=a;
}
}
}
for(int i=0;i<size;i++)
{
printf("%d",num[i]);
}
getch();
}
 