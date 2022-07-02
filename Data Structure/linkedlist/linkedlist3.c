//Traversing a Linked list and counting the number of nodes
#include<stdio.h>
#include<conio.h>
#include<stdlib.h>
void countofnodes();
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
countofnodes(head);
getch();
}
void countofnodes(struct node *head)
{
int count=0;
if(head==NULL)
{
printf("Linkedlist is Empty\n");
}
else
{
struct node *ptr=NULL;
ptr=head;
while(ptr!=NULL)
{
count++;
ptr=ptr->link;
}
printf("%d",count);
}
}
