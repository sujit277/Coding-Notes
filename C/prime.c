/*check wheather a given number is prime or not*/
#include<stdio.h>
#include<conio.h>
void main()
{	
int num,count=0;
printf("enter your number");
scanf("%d",&num);
for(int i=1;i<=num;i++)
{
if(num%i==0)
{
count++;
}
}
if(count==2)
{
printf("%d is the prime number",num);
}
else
{
printf("%d is not the prime number",num);
}
getch();
}
