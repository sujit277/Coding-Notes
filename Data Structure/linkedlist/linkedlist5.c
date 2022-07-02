//Inserting a Node at the end of the linkedlist
#include<stdio.h>
#include<conio.h>
#include<stdlib.h>
void addatend();
void printnodes();
struct node
{
int data;
struct node *link;
};
void main()
{
struct node *head = NULL;
head=(struct node *)malloc(sizeof(struct node)); 
head->data=45;
head->link=NULL;
struct node *current =(struct node *)malloc(sizeof(struct node));
current->data=98;
current->link=NULL;
head->link=current;
struct node *current1 =(struct node *)malloc(sizeof(struct node));
current1->data=70;
current1->link=NULL;
current->link=current1;
printf("%d\n",head->data);
printf("%d\n",current->data);
printf("%d\n",current1->data);
addatend(head,150);
printnodes(head);
getch();
}
void addatend(struct node *head,int data)
{
struct node *ptr, *temp;
ptr=head;
temp=(struct node *)malloc(sizeof(struct node));
temp->data=data;
temp->link=NULL;
while(ptr->link!=NULL)
{
ptr=ptr->link;
}
ptr->link=temp;
}
void printnodes(struct node *head)
{
struct node *ptr=NULL;
ptr=head;
while(ptr!=NULL)
{
printf("%d\n",ptr->data);
ptr=ptr->link;
}
}
