//C Program for Queue
#include<stdio.h>
#include<conio.h>
#include<stdlib.h>
#define capacity 6
void enqueue(int);
void dequeue(void);
void display(void);
int queue[capacity];
int front=-1;
int rear=-1;
void main()
{
int choice,item;
while(1)
{
printf("1.Insert\n");
printf("2.Delete\n");
printf("3.Display\n");
printf("4.Quit\n");
printf("Enter your choice\n");
scanf("%d",&choice);
switch(choice)
{
case 1:printf("Enter the Element You want to Insert\n");
       scanf("%d",&item);
       enqueue(item);
       break;
case 2:dequeue();
       break;
case 3:display();
       break;
case 4:exit(0);
default:printf("Please Enter the valid value\n");
}
}
getch();
}
void enqueue(int value)
{
if(rear==capacity-1)
{
printf("Queue is Full\n");
}
else
{
if(front==-1)
{
front=0;
}
rear++;
queue[rear]=value;
printf("Inserted value is %d\n",value);
}
}
void dequeue()
{
if(front==-1&&rear==-1)
{
printf("Queue is Empty\n");
}
else
{
printf("Deleted item is %d\n",queue[front]);
front++;
if(front>rear)
{
front=rear=-1;
}
}
}
void display()
{
if(rear==-1&&front==-1)
{
printf("Queue is Empty\n");
}
else
{
for(int i=front;i<=rear;i++)
{
printf("%d\n",queue[i]);
}
printf("\n");
}
}