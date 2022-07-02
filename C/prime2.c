/*printing prime numbers between two intervals*/
#include<stdio.h>
#include<conio.h>
void main()
{
int low,large;
printf("enter your number");
scanf("%d%d",&low,&large);
for(int i=low;i<=large;i++)
{
int count=0;
for(int j=1;j<=i;j++)
{
if(i%j==0)
{
count++;
}
}
if(count==2)
{
printf("%d\n",i);
}
}
getch();
}
