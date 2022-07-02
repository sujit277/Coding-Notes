//Adding a node at the end of the Linkedslist
#include<stdio.h>
#include<conio.h>
#include<stdlib.h>
struct node* addatend();
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
struct node *ptr=current1;
ptr=addatend(ptr,11);
ptr=addatend(ptr,12);
ptr=head;
while(ptr!=NULL)
{
printf("%d\n",ptr->data);
ptr=ptr->link;
}
getch();
}
struct node* addatend(struct node* ptr, int data)
{
struct node* temp=(struct node *)malloc(sizeof(struct node));
temp->data=data;
temp->link=NULL;
ptr->link=temp;
return temp;
}