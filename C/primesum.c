/*sum of prime numbers upto n terms*/
#include<stdio.h>
#include<conio.h>
void main()
{
int num;
printf("enter the number upto which you want sum of prime numbers\n");
scanf("%d",&num);
int sum=0;
for(int i=2;i<=num;i++)
{
int count=0;
for(int j=1;j<=i;j++)
{
if(i%j==0)
{
count++;
}
}
if(count==2)
{
printf("%d\n",i);
sum=sum+i;
}
}
printf("sum of prime numbers upto %d is %d",num,sum);
getch();
}

