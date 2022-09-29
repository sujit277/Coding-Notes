/*pattern6*/
#include<stdio.h>
#include<conio.h>
void main()
{
for(int i=1;i<=5;i++)
{
for(int j=i;j<=2*i-1;j++)
{
printf("%d",j);
}
printf("\n");
}
getch();
}