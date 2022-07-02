#include<stdio.h>
#include<conio.h>
#include<stdlib.h>
#include<stdbool.h>
void append();
void display();
int length();
struct node
{
int data;
struct node *link;
};
void main()
{
struct node *root=NULL;
struct node *temp;
root=(struct node*)malloc(sizeof(struct node));
temp=(struct node *)malloc(sizeof(struct node));
append();
display();
append();
append();
display();
int y=length();
printf("%d",y);
}
void append()
{
struct node *root;
struct node *temp;
temp=(struct node *)malloc(sizeof(struct node));
printf("enter the element to insert");
scanf("%d",&temp->data);
temp->link=NULL;
if(root==NULL)
{
root=temp;
}
else
{
struct node *p;
p=root;
while(p->link!=NULL)
{
p=p->link;
}
p->link=temp;
}
}
void display()
{
struct node *temp;
struct node *root;
temp=root;
if(temp==NULL)
{
printf("list is empty");
}
else
{
while(temp!=NULL)
{
printf("%d",temp->data);
temp=temp->link;
}
printf("\n\n");
}
}
int length()
{
struct node *root;
int count=0;
struct node *temp;
temp=root;
while(temp!=NULL)
{
count++;
temp=temp->link;
}
return count;
} 