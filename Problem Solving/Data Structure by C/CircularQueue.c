//C Program for Circular Queue 
#include<stdio.h>
#include<conio.h>
#include<stdlib.h>
#define size 5
void display(void);
void enqueue(int);
int dequeue(void);
int Isfull(void);
int Isempty(void);
int Queue[5];
int rear=-1;
int front=-1;
void main()
{
int ch,item;
while(1)
{
printf("1.Inserting\n");
printf("2.Dequeueing\n");
printf("3.Display\n");
printf("4.Exit\n");
printf("Enter your choice\n");
scanf("%d",&ch);
switch(ch)
{
case 1:printf("Enter the Item You want to insert\n");
       scanf("%d",&item);
       enqueue(item);
       break;
case 2:item=dequeue();
       if(item==-1)
       {
       printf("Queue is Empty\n");
       }
       else
       {
       printf("Deleted item is %d\n",item);
       }
       break;
case 3:display();
       break;
case 4:exit(0);
default:printf("Enter valid input\n");
}
}       
getch();
}
void display()
{
if(Isempty())
{
printf("Queue is Empty\n");
}
else
{
printf("Queue elements are \n");
for(int i=front;i<=rear;i=(i+1)%size)
{
printf("%d\n",Queue[i]);
}
}
}
int Isempty()
{
if(front==-1 && rear==-1)
{
return 1;
}
else
{
return 0;
}
}
int Isfull()
{
if(front==rear+1 || (front==0 && rear==size-1))
{
return 1;
}
else
{
return 0;
}
}
void enqueue(int item)
{
if(Isfull())
{
printf("Queue is full\n");
}
else
{
if(front==-1)
{
front=0;
}
rear=(rear+1)%size;
Queue[rear]=item;
printf("Inserted item is %d",item);
}
}
int dequeue()
{
int element;
if(Isempty())
{
return -1;
}
else
{
element=Queue[front];
if(front==rear)
{
front=rear=-1;
}
else
{
front=(front+1)%size;
}
return element;
}
}
