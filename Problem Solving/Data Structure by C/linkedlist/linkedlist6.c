// Adding a Node at the begining of the Linkedlist
#include<stdio.h>
#include<conio.h>
#include<stdlib.h>
struct node* addbegin();
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
head=addbegin(head,189);
struct node *ptr=head;
while(ptr!=NULL)
{
printf("%d\n",ptr->data);
ptr=ptr->link;
}
getch();
}
struct node* addbegin(struct node *head, int data)
{
struct node *ptr=(struct node *)malloc(sizeof(struct node));
ptr->data=data;
ptr->link=NULL;
ptr->link=head;
head=ptr;
return head;
}