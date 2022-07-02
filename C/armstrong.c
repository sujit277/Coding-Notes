/*check whether a number is armstrong number or not*/
#include<stdio.h>
#include<conio.h>
void main()
{
int num,sum=0,a,digit;
printf("enter your number");
scanf("%d",&num);
digit=num;
while(num>0)
{
a=num%10;
num=num/10;
sum=sum+a*a*a;
}
if(sum==digit)
{
printf("%d is the armstrong number",digit);
}
else
{
printf("%d is not the armstrong number",digit);
}
getch();
}