//program to check wheather a tree is full binary tree or not
#include<stdio.h>
#include<conio.h>
#include<stdbool.h>
#include<stdlib.h>
//userdefined datatype
struct Node
{
int item;
struct Node *left,*right;
};
//creation of new node
struct Node *createNewNode(char k)
{
struct Node *node=(struct Node *)malloc(sizeof(struct Node));
node->item=k;
node->right=node->left=NULL;
return node;
}
bool isfullbinary(struct Node *root)
{
if(root==NULL)
{
return true;
}
if(root->left==NULL&&root->right==NULL)
{
return true;
}
if(root->left&&root->right)
{
return (isfullbinary(root->left)&&isfullbinary(root->right));
}
return false;
}
void main()
{
struct Node *root=NULL;
root = createNewNode(1);
root->left = createNewNode(2);
root->right = createNewNode(3);
root->left->left = createNewNode(4);
root->left->right = createNewNode(5);
root->left->right->left = createNewNode(6);
root->left->right->right = createNewNode(7);
if(isfullbinary(root))
{
printf("tree is full binary tree");
}
else
{
printf("tree is not full binary tree");
}
getch();
}

