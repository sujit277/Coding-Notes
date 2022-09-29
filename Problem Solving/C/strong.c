/*check whether a given number is strong number or not*/
#include<stdio.h>
#include<conio.h>
int fact(int);
void main()
{
int num,sum=0,digit,a;
printf("enter your number");
scanf("%d",&num);
digit=num;
while(num>0)
{
a=num%10;
num=num/10;
sum=sum+fact(a);
}
if(sum==digit)
{
printf("%d is the strong number",digit);
}
else
{
printf("%d is not the strong number",digit);
}
getch();
}
int fact(int x)
{
int facto=1;
for(int i=1;i<=x;i++)
{
facto=facto*i;
}
return facto;
}

