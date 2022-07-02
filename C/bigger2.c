/*greatest among two numbers*/
#include<stdio.h>
#include<conio.h>
void main()
{
int num1,num2;
printf("enter your number");
scanf("%d%d",&num1,&num2);
if(num1>num2)
{
printf("%d is greatear than %d",num1,num2);
}
else
{
printf("%d is greater than %d",num2,num1);
}
getch();
}