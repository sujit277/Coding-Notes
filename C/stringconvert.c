//Converting uppercase to lowercase
#include<stdio.h>
#include<conio.h>
void main()
{
char name[40];
int i=0;
printf("Enter your string");
scanf("%s",name);
while(name[i]!='\0')
{
if(name[i]>='A' && name[i]<='Z')
{
name[i]=name[i]+32;
}
i++;
}
printf("string is %s",name);
getch();
}