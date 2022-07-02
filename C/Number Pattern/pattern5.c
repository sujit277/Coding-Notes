/*pattern5*/
#include<stdio.h>
#include<conio.h>
void main()
{
for(int i=5;i>=1;i--)
{
for(int j=5;j>=i;j--)
{
printf("%d",j);
}
printf("\n");
}
getch();
}