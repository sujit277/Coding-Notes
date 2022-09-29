//C Program to find the sum of indivisual row elements of a matrix and the maxmimum Row value
#include<stdio.h>
#include<conio.h>
void main()
{
int a[3][3],max[3];
int i,j;
printf("Enter Your matrix\n");
for(int i=0;i<3;i++)
{
for(int j=0;j<3;j++)
{
printf("The Maxtix [%d][%d] is",i,j);
scanf("%d",&a[i][j]);
}
}
printf("Matrix is\n");
for(int i=0;i<3;i++)
{
for(int j=0;j<3;j++)
{
printf("%3d",a[i][j]);
}
printf("\n");
}
printf("Sum of indivisual Elements\n");
for(int i=0;i<3;i++)
{
int row=0;
for(int j=0;j<3;j++)
{
row=row+a[i][j];
}
max[i]=row;
printf("Sum of %d row is %d\n",i+1,row);
}
for(int i=0;i<2;i++)
{
for(int j=i+1;j<3;j++)
{
if(max[i]<max[j])
{
int c=max[i];
max[i]=max[j];
max[j]=c;
}
}
}
printf("The Largest row sum is %d",max[0]);
getch();
}