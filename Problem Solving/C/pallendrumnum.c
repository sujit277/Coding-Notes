/*check whether a number is pallendrum or not*/
#include<stdio.h>
#include<conio.h>
void main()
{
int num,digit,reverse=0,a;
printf("enter your number");
scanf("%d",&num);
digit=num;
while(num>0)
{
a=num%10;
num=num/10;
reverse=reverse*10+a;
}
if(reverse==digit)
{
printf("%d is pallendrum",digit);
}
else
{
printf("%d is not pallendrum",digit);
}
getch();
}

