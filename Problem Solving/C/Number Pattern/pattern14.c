/*pattern14*/
#include<stdio.h>
#include<conio.h>
void main()
{
int k=0;
for(int i=1;i<=5;i++)
{
for(int j=1;j<=i;j++)
{
k++;
printf("%d",k);
}
printf("\n");
}
getch();
}
