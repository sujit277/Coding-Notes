//Program to check tree is perfect binary tree or not
#include<stdio.h>
#include<conio.h>
#include<stdlib.h>
#include<stdbool.h>
//creation of userdefined data type
struct Node
{
int data;
struct Node *left;
struct Node *right;
};
//creation of new node
struct Node *newnode(int data)
{
struct Node *node=(struct Node *)malloc(sizeof(struct Node));
node->data=data;
node->right=node->left=NULL;
return node;
}
//calculate depth of the tree
int depth(struct Node *node)
{
int d=0;
while(node!=NULL)
{
d++;
node=node->left;
}
return d;
}
//check if the tree is perfect or not
bool is_perfect(struct Node *root,int d,int level)
{
//check if the tree is empty
if(root==NULL)
{
return true;
}
//check the presence of children
if(root->right==NULL&&root->left==NULL)
{
return (d==level+1);
}
if(root->right==NULL||root->left==NULL)
{
return false;
}
return (is_perfect(root->left,d,level+1)&&is_perfect(root->right,d,level+1));
}
//wrapper function
bool isperfect(struct Node *root)
{
int d=depth(root);
return is_perfect(root,d,0);
}
void main()
{
struct Node *root=NULL;
root = newnode(1);
root->left = newnode(2);
root->right = newnode(3);
root->left->left = newnode(4);
root->left->right = newnode(5);
root->right->left = newnode(6);
if(isperfect(root))
{
printf("tree is perfect tree");
}
else
{
printf("tree is not the perfect tree");
}
getch();
}