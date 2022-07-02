// C Program to Print Matrix
#include<stdio.h>
#include<conio.h>
void main()
{
int array[3][3],i,j;
printf("Enter the your Matrix\n");
for(int i=0;i<3;i++)
{
for(int j=0;j<3;j++)
{
printf("Enter elements in [%d][%d]\n",i,j);
scanf("%d",&array[i][j]);
}
}
for(int i=0;i<3;i++)
{
for(int j=0;j<3;j++)
{
printf("%3d",array[i][j]);
}
printf("\n");
}
getch();
}