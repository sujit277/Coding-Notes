/*swaping of two numbers*/
#include<stdio.h>
#include<conio.h>
void main()
{
int a,b,c;
printf("enter two numbers");
scanf("%d%d",&a,&b);
c=b;
b=a;
a=c;
printf("a= %d and b=%d ",a,b);
getch();
}
