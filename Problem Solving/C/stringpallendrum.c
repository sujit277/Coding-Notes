/*checking a string is pallendrume or not*/
#include<stdio.h>
#include<conio.h>
#include<string.h>
void main()
{
char name[20],nick[20];
int size;
printf("enter your name");
scanf("%s",name);
strcpy(nick,name);
strrev(name);
if(strcmp(nick,name)==0)
{
printf("%s is pallendrum",nick);
}
else
{
printf("%s is not pallendrum",nick);
}
getch();
}


