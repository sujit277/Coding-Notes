//Deleting the first Node of the Linkedlist
#include<stdio.h>
#include<conio.h>
#include<stdlib.h>
struct node* deletefirst();
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
head=deletefirst(head);
struct node *ptr=head;
while(ptr!=NULL)
{
printf("%d\n",ptr->data);
ptr=ptr->link;
}
getch();
}
struct node* deletefirst(struct node* head)
{
if(head==NULL)
{
printf("Linkedlist is empty\n");
}
else
{
struct node* temp;
temp=head;
head=head->link;
free(temp);
temp=NULL;
return head;
}
}
