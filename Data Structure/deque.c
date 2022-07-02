#include<stdio.h>
#include<conio.h>
#define N 5
int deque[N];
void endequefront(int);
void endequerear(int);
void display();
void dedequefront();
void dedequerear();
int front=-1,rear=-1;
void endequefront(int element)
{
if(front==rear+1||front==0 && rear==N-1)
{
printf("deque is full\n");
}
else if(front==-1 && rear==-1)
{
front=rear=0;
deque[front]=element;
}
else if(front==0)
{
front=N-1;
deque[front]=element;
}
else
{
front--;
deque[front]=element;
}
}
void endequerear(int element)
{
if(front==rear+1||front==0 && rear==N-1)
{
printf("deque is full\n");
}
else if(front==-1 && rear==-1)
{
front=rear=0;
deque[rear]=element;
}
else if(rear==N-1)
{
rear=0;
deque[rear]=element;
}
else
{
rear++;
deque[rear]=element;
}
}
void display()
{
int i=front;
printf("Items are\n");
for(i=front;i!=rear;i=(i+1)%N)
{
printf("%d",deque[i]);
}
printf("%d",deque[i]);
}
void dedequefront()
{
if(front==-1 && rear==-1)
{
printf("deque is empty");
}
else if(front==rear)
{
front=rear=-1;
}
else if(front==N-1)
{
printf("%d",deque[front]);
front=0;
}
else
{
printf("%d",deque[front]);
front++;
}
}
void dedequerear()
{
if(front==-1 && rear==-1)
{
printf("deque is empty");
}
else if(front==rear)
{
front=rear=-1;
}
else if(rear==0)
{
printf("%d",deque[rear]);
}
else
{
printf("%d",deque[rear]);
rear--;
}
}
void main()
{
endequefront(2);
endequefront(5);
endequerear(-1);
endequerear(0);
endequefront(7);
endequefront(6);
display();
dedequerear();
}



