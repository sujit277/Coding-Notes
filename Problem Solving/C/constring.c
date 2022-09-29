/*concatente two strings*/
#include<stdio.h>
#include<conio.h>
void main()
{
char a[20],b[20],c[40];
printf("enter first string");
scanf("%s",a);
printf("enter second string");
scanf("%s",b);
int i=0,j=0;
while(a[i]!='\0')
{
c[i]=a[i];
i++;
}
while(b[j]!='\0')
{
c[i]=b[j];
i++,j++;
}
c[i]='\0';
printf("concatenated string is %s",c);
getch();
}

