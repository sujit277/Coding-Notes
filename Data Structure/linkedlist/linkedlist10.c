//Deleting the Last node of the Linkedlist
#include<stdio.h>
#include<conio.h>
#include<stdlib.h>
struct node* deletelast();
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
head=deletelast(head);
struct node *ptr=head;
while(ptr!=NULL)
{
printf("%d\n",ptr->data);
ptr=ptr->link;
}
getch();
}
struct node* deletelast(struct node* head)
{
if(head==NULL)
{
printf("Linkedlist is Empty\n");
}
else if(head->link==NULL)
{
free(head);
head=NULL;
}
else
{
struct node* temp=head;
struct node* temp2=head;
while(temp->link!=NULL)
{
temp2=temp;
temp=temp->link;
}
temp2->link=NULL;	
free(temp);
temp=NULL;
return head;
}
}
