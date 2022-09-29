/*finding sum of all array elememts*/
#include<stdio.h>
#include<conio.h>
void main()
{
int arr[20],size;
int sum=0;
printf("enter the array Size");
scanf("%d",&size);
printf("enter the array elements");
for(int i=0;i<size;i++)
{
scanf("%d",&arr[i]);
}
for(int i=0;i<size;i++)
{
sum=sum+arr[i];
}
printf("%d",sum);
getch();
}

