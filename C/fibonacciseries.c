/*print fibonacci series upto n numbers*/
#include<stdio.h>
#include<conio.h>
void main()
{
int range,n1=0,n2=1,n,count=0;
printf("enter your number\n");
scanf("%d",&range);
if(range==0)
{
printf("please enter positive number\n");
}
else if(range==1)
{
printf("fibonacii series is 0\n");
}
else
{
printf("fibonacci series are\n");
while(count<=range)
{
printf("%d\n",n1);
n=n1+n2;
n1=n2;
n2=n;
count++;
}
}
getch();
}
