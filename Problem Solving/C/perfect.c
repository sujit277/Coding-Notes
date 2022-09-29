/*check whether the given number is perfect number or not*/
#include<stdio.h>
#include<conio.h>
void main()
{
int sum=0,num;
print("Enter your number");
scanf("%d",&num);
for(int i=1;i<num;i++)
{
if(num%i==0)
{
sum=sum+i;
}
}
if(sum==num)
{
printf("%d is the perfect number",num);
}
else
{
printf("%d is not the perfect number",num);
}
getch();
}
