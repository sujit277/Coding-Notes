#include<stdio.h>
#include<conio.h>
#include<math.h>
void main()
{
int num,T1=0,T2=0,T3=0,count=1,A1=0,A2=0,A3=0;
while(count<=9)
{
printf("enter your oxygen rates\n");
scanf("%d",&num);
if(num>=1&&num<=100)
{
if(count%3==1)
{
T1=T1+num;
}
if(count%3==2)
{
T2=T2+num;
}
if(count%3==0)
{
T3=T3+num;
}
count++;
}
else
{
printf("invalid input\n");
count++;
}
}
A1=round(T1/3);
A2=round(T2/3);
A3=round(T3/3);
if(A1<=70&&A2<=70&&A3<=70)
{
printf("all trainess are unfit\n");
}
else
{
if(A1>A2&&A1>A3)
{
printf("trainee 1");
}
else if(A2>A1&&A2>A3)
{
printf("Trainee 2");
}
else
{
printf("Trainee 3");
}
}
getch();
}