/* finding lcm and hcm of two numbers*/
#include<stdio.h>
#include<conio.h>
void main()
{
int n1,n2,max,hcm;
printf("enter your two numbers");
scanf("%d%d",&n1,&n2);
if(n1>n2)
{
max=n1;
}
else
{
max=n2;
}
while(1)
{
if(max%n1==0&&max%n2==0)
{
printf("lcm of %d and %d is %d",n1,n2,max);
break;
}
max++;
}
hcm=(n1*n2)/max;
printf("hcm of %d and %d is %d",n1,n2,hcm);
getch();
}