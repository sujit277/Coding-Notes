/*factorial of a number*/
#include<stdio.h>
#include<conio.h>
void main()
{
int fact=1,num;
printf("enter your number");
scanf("%d",&num);
for(int i=1;i<=num;i++)
{
fact=fact*i;
}
printf("%d",fact);
getch();
}