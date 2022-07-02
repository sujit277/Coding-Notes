/*print prime number upto a given sequence*/
#include<stdio.h>
#include<conio.h>
void main()
{
int num;
printf("enter the range upto you want prime sequence");
scanf("%d",&num);
for(int i=2;i<=num;i++)
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


