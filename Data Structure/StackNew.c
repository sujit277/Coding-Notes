//C Program to Related to Stack
#include<stdio.h>
#include<conio.h>
#include<stdlib.h>
#define capacity 5
int stack[capacity];
int top=-1;
void traverse(void);
int Isfull(void);
int Isempty(void);
void push(int);
int pop(void);
int peek(void);
void main()
{
int ch,item;
while(1)
{
printf("1.Push\n");
printf("2.Pop\n");
printf("3.Peek\n");
printf("4.Traverse\n");
printf("5.Quit\n");
printf("Enter your Choice\n");
scanf("%d",&ch);
switch(ch)
{
case 1:printf("Enter the Element You want to Insert\n");
       scanf("%d",&item);
       push(item);
       break;
case 2:item=pop();
       if(item==-1)
       {
       printf("Stack is empty\n");
       }
       else
       {
       printf("%d is deletd\n",item);
       }
       break;
case 3:item=peek();
       if(item==-1)
       {
       printf("Stack is Empty\n");
       }
       else
       {
       printf("%d is the top element\n",item);
       }
       break;
case 4:traverse();
       break;
case 5:exit(0);
default:printf("Enter valid choice\n");
}
}
getch();
}
int Isfull()
{
if(top==capacity-1)
{
return 1;
}
else
{
return 0;
}
}
int Isempty()
{
if(top==-1)
{
return 1;
}
else
{
return 0;
}
}
void push(int item)
{
if(Isfull())
{
printf("Stack is full\n");
}
else
{
top++;
stack[top]=item;
printf("%d is Inserted\n",item);
}
}
int pop()
{
if(Isempty())
{
return -1;
}
else
{
return stack[top--];
}
}
int peek(void)
{
if(Isempty())
{
return -1;
}
else
{
return stack[top];
}
}
void traverse()
{
if(Isempty())
{
printf("Stack is empty\n");
}
else
{
for(int i=0;i<=top;i++)
{
printf("%d\n",stack[i]);
}
}
}