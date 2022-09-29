//C Program to find addition Of Two matrix
#include<stdio.h>
#include<conio.h>
void main()
{
int a[3][3],b[3][3],c[3][3];
int i,j;
printf("Enter first Matrix\n");
for(int i=0;i<3;i++)
{
for(int j=0;j<3;j++)
{
printf("Enter first Matrix [%d][%d]",i,j);
scanf("%d",&a[i][j]);
}
}
printf("Enter Second Matrix\n");
for(int i=0;i<3;i++)
{
for(int j=0;j<3;j++)
{
printf("Enter second Matrix [%d][%d]",i,j);
scanf("%d",&b[i][j]);
}
}
for(int i=0;i<3;i++)
{
for(int j=0;j<3;j++)
{
c[i][j]=a[i][j]+b[i][j];
}
}
printf("the Sum of two matrices\n");
for(int i=0;i<3;i++)
{
for(int j=0;j<3;j++)
{
printf("%3d",c[i][j]);
}
printf("\n");
}
getch();
}
