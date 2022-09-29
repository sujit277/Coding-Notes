//Creating a Single LinkedList containing N Nodes
/* we can create a single linkedlist by using two methods */
//Method 1
/*
#include<stdio.h>
#include<conio.h>
#include<stdlib.h>
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
getch();
}
*/
//Here this method is not good because whenever we want to create a linkedlist Having
// n Nodes we have to create n Pointers in a linkedlist which is not good

//Method 2

#include<stdio.h>
#include<conio.h>
#include<stdlib.h>
struct node
{
int data;
struct node *link;
};
void main()
{
struct node *head =NULL;
head=(struct node *)malloc(sizeof(struct node));
head->data=45;
head->link=NULL;

struct node *current=(struct node *)malloc(sizeof(struct node));
current->data=89;
current->link=NULL;
head->link=current;

current=(struct node *)malloc(sizeof(struct node));
current->data=66;
current->link=NULL;
head->link->link=current;
printf("%d\n",head->data);
printf("%d",current->data);
getch();
} 
