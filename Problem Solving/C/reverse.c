/*reverse of a number*/
#include<stdio.h>
#include<conio.h>
void main()
{
int num,reverse=0,a;
printf("enter your number");
scanf("%d",&num);
while(num>0)
{
a=num%10;
num=num/10;
reverse=reverse*10+a;
}
printf("reverse of a number is %d",reverse);
getch();
}




