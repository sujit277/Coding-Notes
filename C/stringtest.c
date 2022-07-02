// C Program to find the length of string , No of each vowels in the string and
//printing the string without vowels
#include<stdio.h>
#include<conio.h>
#include<string.h>
void main()
{
char str[20];
int c,i;
int counta=0,countu=0,counti=0,counto=0,counte=0;
printf("enter your string\n");
gets(str);
c=strlen(str);
printf("%d\n",c);
for(int i=0;i<c;i++)
{
if(str[i]=='A'||str[i]=='a')
{
counta=counta+1;
}
if(str[i]=='U'||str[i]=='u')
{
countu=countu+1;
}
if(str[i]=='I'||str[i]=='i')
{
counti=counti+1;
}
if(str[i]=='E'||str[i]=='e')
{
counte=counte+1;
}
if(str[i]=='O'||str[i]=='o')
{
counto=counto+1;
}
}
printf("a:=%d\n",counta);
printf("u:=%d\n",countu);
printf("e:=%d\n",counte);
printf("i:=%d\n",counti);
printf("o:=%d\n",counto);
for(int i=0;i<c;i++)
{
if(str[i]=='a'||str[i]=='A'||str[i]=='o'||str[i]=='O'||str[i]=='e'||str[i]=='E'||str[i]=='i'||str[i]=='I'||str[i]=='u'||str[i]=='U')
{
for(int j=i;j<c;j++)
{
str[j]=str[j+1];
}
c--;
}
}
printf("%s\n",str);
getch();
}