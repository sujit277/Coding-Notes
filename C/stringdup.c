//C Program to Print Duplicates Elements in an Array
#include<stdio.h>
#include<conio.h>
void main()
{
int size;
int count=1;
printf("enter the length of the array\n");
scanf("%d",&size);
int arr[size];
for(int i=0;i<size;i++)
{
scanf("%d\n",&arr[i]);
}
for(int i=0;i<size-1;i++)
{
for(int j=i+1;j<size;j++)
{
if(arr[i]==arr[j])
{
if(count==1 && arr[j]!='\0')
{
printf("%d",arr[i]); 
}
arr[j]='\0';
count++;
}
}
}
getch();
}