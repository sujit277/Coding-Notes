//C Program to check whether a given matrix is identical or not
#include<stdio.h>
#include<conio.h>
int aresame(int[3][3],int[3][3]);
void main()
{
int a[3][3],b[3][3];
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
if(aresame(a,b))
{
printf("Matrices are Identical\n");
}
else
{
printf("Matrices are Not Identical");
}
getch();
}
int aresame(int a[3][3],int b[3][3])
{
int i,j;
for(int i=0;i<3;i++)
{
for(int j=0;j<3;j++)
{
if(a[i][j]!=b[i][j])
{
return 0;
}
}
}
return 1;
}