#include<stdio.h>
#include<conio.h>
void main()
{
int num;
printf("enter the number of candies taken\n");
scanf("%d",&num);
if(num>=1&&num<=5)
{
printf("number of candies sold is %d\n",num);
printf("number of candies in the jar is %d\n",10-num);
}
else
{
printf("invalid input\n");
printf("the num of caandies in the jar is 10\n");
}
getch();
}