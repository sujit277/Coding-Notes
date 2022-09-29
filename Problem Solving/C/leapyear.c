/*year is leap year or not*/
#include<stdio.h>
#include<conio.h>
void main()
{
int year;
printf("enter the year");
scanf("%d",&year);
if(year%100==0)
{
if(year%400==0)
{
printf("%d is leap year",year);
}
else
{
printf("%d is not the leap year",year);
}
}
else
{
if(year%4==0)
{
printf("%d is leap year",year);
}
else
{
printf("%d is not the leap year",year);
}
}
getch();
}