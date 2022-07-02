/*reversing a string*/
#include<stdio.h>
#include<conio.h>
#include<string.h>
void main()
{
char name[20];
int size;
printf("enter your name");
scanf("%s",name);
size=strlen(name);
for(int i=size-1;i>=0;i--)
{
printf("%c",name[i]);
}
getch();
}
