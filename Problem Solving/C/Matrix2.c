//C Program to Transpose Matrix
#include<stdio.h>
#include<conio.h>
void main()
{
int array[3][3],i,j;
printf("Enter Your Matrix\n");
for(int i=0;i<3;i++)
{
for(int j=0;j<3;j++)
{
printf("Enter the Matrix [%d][%d]",i,j);
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
printf("Transpose of the Matrix is \n");
for(int i=0;i<3;i++)
{
for(int j=0;j<3;j++)
{
if(i<j)
{
int c=array[i][j];
array[i][j]=array[j][i];
array[j][i]=c;
}
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
