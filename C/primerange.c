/*find the prime number within a given range*/
#include<stdio.h>
#include<conio.h>
void main()
{
int range,count;
printf("enter your range for finding prime number");
scanf("%d",&range);
for(int i=1;i<=range;i++)
{
count=0;
for(int j=1;j<=i;j++)
{
if(i%j==0)
{
count++;
}
}
if(count==2)
{
printf("%d\n",i);
}
}
getch();
} 