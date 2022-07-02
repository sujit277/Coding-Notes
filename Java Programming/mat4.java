//Java Program to find the sum of the daigonal Elements of a matrix 

import java.util.*;
class mat4
{
public static void main(String args[])
{
Scanner sc = new Scanner(System.in);
int sum = 0;
System.out.println("Enter the no of rows of the matrix");
int row = sc.nextInt();
System.out.println("Enter the no of columns of the matrix");
int col = sc.nextInt();
int mat[][] = new int[row][col];
for(int i=0;i<row;i++)
{
for(int j=0;j<col;j++)
{
mat[i][j] = sc.nextInt();
}
}
System.out.println("the Matrix is");
for(int i=0;i<row;i++)
{
for(int j=0;j<col;j++)
{
System.out.print(mat[i][j]+"\t");
}
System.out.println();
}
for(int i=0;i<row;i++)
{
for(int j=0;j<col;j++)
{
if(i==j)
{
sum = sum + mat[i][j];
}
}
}
System.out.println("The sum of Diagonal Elements of a Matrix is "+sum);
}
} 