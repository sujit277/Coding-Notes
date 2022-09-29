/*finding the size of string*/
#include<stdio.h>
#include<conio.h>
void main()
{
char name[20],l=0;
printf("enter your string");
scanf("%s",name);
for(int i=0;name[i]!='\0';i++)
{
l++;
}
printf("%d",l);
getch();
}