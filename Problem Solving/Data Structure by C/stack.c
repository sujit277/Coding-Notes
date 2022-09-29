#include<stdio.h>
#include<conio.h>
#include<stdlib.h>
#define MAX 10
int count=0;
//Creating a stack
struct stack{
int items[MAX];
int top;
};
typedef struct stack st;
void createemptystack(st *s)
{
s->top=-1;
}
//check if the stack is full
int isfull(st *s)
{
if(s->top==MAX-1)
return 1;
else
return 0;
}
//check if the stack is empty
int isempty(st *s)
{
if(s->top==-1)
return 1;
else
return 0;
}
//Add elments into stack 
void push(st *s,int newitem)
{
if(isfull(s))
{
printf("stack is full");
}
else
{
s->top++;
s->items[s->top]=newitem;
}
count++;
}
//remove element from stack
void pop(st *s)
{
if(isempty(s))
{
printf("stack is empty");
}
else
{
printf("Poped item is %d",s->items[s->top]);
s->top--;
}
count--;
printf("\n");
}
//print elemets of the stack
void printstack(st *s)
{
printf("Stack\n");
for(int i=0;i<count;i++)
{
printf("%d\n",s->items[i]);
}
printf("\n");
}
//driver code
void main()
{
st *s=(st *)malloc(sizeof(st));
createemptystack(s);
push(ss,1);
push(s,2);
push(s,3);
push(s,4);
printstack(s);
pop(s);
printf("after poping out\n");
printstack(s);
}

