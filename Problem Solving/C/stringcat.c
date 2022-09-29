//Concatenate two string
#include<stdio.h>
#include<conio.h>
void main()
{
char name[20];
char nickname[20];
int i=0;
printf("Enter the First string\n");
scanf("%s",name);
printf("Enter the second string\n");
scanf("%s",nickname);
while(name[i]!='\0')
{
i++;
}
for(int j=0;nickname[j]!='\0';j++,i++)
{
name[i]=nickname[j];
}
name[i]='\0';
puts(name);
getch();
}