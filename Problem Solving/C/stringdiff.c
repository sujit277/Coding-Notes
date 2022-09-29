//C Program to print different elements of a string
#include<stdio.h>
#include<conio.h>
#include<string.h>
void main()
{
char name[30];
printf("Enter your String\n");
scanf("%s",name);
int len = strlen(name);
for(int i=0;name[i]!='\0';i++)
{
for(int j=i+1;name[j]!='\0';j++)
{
if(name[i]==name[j])
{
for(int k=j;name[k]!='\0';k++)
{
name[k] = name[k+1];
}
}
}
}
printf("%s",name);
getch();
}