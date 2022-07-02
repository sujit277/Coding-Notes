//Program to insert into a binary search tree
#include<stdio.h>
#include<conio.h>
#include<stdlib.h>
//Creation of userdefined datatype
struct Node
{
int key;
struct Node *left;
struct Node *right;
};
//Creation of Node
struct Node *newnode(int item)
{
struct Node *node=(struct Node *)malloc(sizeof(struct Node));
node->key=item;
node->right=node->left=NULL;
return node;
}
//Traversal of elements in node
void inordertraversal(struct Node *root)
{
if(root!=NULL)
{
inordertraversal(root->left);
printf("%d\n",root->key);
inordertraversal(root->right);
}
}
struct Node *insert(struct Node *node,int key)
{
//if tree is empty returns a new node
if(node==NULL)
{
return newnode(key);
}
//otherwise recur down the tree
if(key<node->key)
{
node->left=insert(node->left,key);
}
if(key>node->key)
{
node->right=insert(node->right,key);
}
return node;
}
void main()
{
struct Node* root = NULL; 
root = insert(root, 50); 
insert(root, 30); 
insert(root, 20); 
insert(root, 40); 
insert(root, 70); 
insert(root, 60); 
insert(root, 80);
inordertraversal(root);
getch();
}
