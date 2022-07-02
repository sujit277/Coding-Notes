//Inserting a Node at any Position in the Linkedlist
#include<stdio.h>
#include<conio.h>
#include<stdlib.h>
void printnodes();
void addatpos();
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
int data=136;
int pos=3;
addatpos(head,data,pos);
printnodes(head);
getch();
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
void addatpos(struct node* head,int data,int pos)
{ 
struct node* ptr=NULL;
ptr=head;
struct node* ptr2=(struct node *)malloc(sizeof(struct node));
ptr2->data=data;
ptr2->link=NULL;
while(pos!=2)
{
ptr=ptr->link;
pos--;
}
ptr2->link=ptr->link;
ptr->link=ptr2;
}

