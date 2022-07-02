//C Program To find the sum Of Daigonal Elements of a matrix
#include<stdio.h>
#include<conio.h>
void main()
{
int a[3][3];
int i,j,sum=0;
printf("Enter Your Matrix\n");
for(int i=0;i<3;i++)
{
for(int j=0;j<3;j++)
{
printf("The matrix [%d][%d] is",i,j);
scanf("%d",&a[i][j]);
}
}
printf("matrix Is\n");
for(int i=0;i<3;i++)
{
for(int j=0;j<3;j++)
{
printf("%3d",a[i][j]);
}
printf("\n");
}
for(int i=0;i<3;i++)
{
for(int j=0;j<3;j++)
{
if(i==j)
{
sum=sum+a[i][j];
}
}
}
printf("Sum of daigonal Elements is %d",sum);
getch();
}