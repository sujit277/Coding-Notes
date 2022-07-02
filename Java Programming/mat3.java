//Java Program to find sum of two of Matrix

import java.util.*;
class mat3
{
public static void main(String args[])
{
Scanner sc = new Scanner(System.in);
System.out.println("Enter the no of rows of the matrices");
int row = sc.nextInt();
System.out.println("Enter the no of columns of the matrices");
int col = sc.nextInt();
int mat1[][] = new int[row][col];
int mat2[][] = new int[row][col];
int result[][] = new int[row][col];
System.out.println("Enter first Matrix Elements");
for(int i=0;i<row;i++)
{
for(int j=0;j<col;j++)
{
mat1[i][j] = sc.nextInt();
}
}
System.out.println("Enter second Matrix Elements");
for(int i=0;i<row;i++)
{
for(int j=0;j<col;j++)
{
mat2[i][j] = sc.nextInt();
}
}
System.out.println("the first Matrix is");
for(int i=0;i<row;i++)
{
for(int j=0;j<col;j++)
{
System.out.print(mat1[i][j]+"\t");
}
System.out.println();
}
System.out.println("the first Matrix is");
for(int i=0;i<row;i++)
{
for(int j=0;j<col;j++)
{
System.out.print(mat2[i][j]+"\t");
}
System.out.println();
}
for(int i=0;i<row;i++)
{
for(int j=0;j<col;j++)
{
result[i][j] = mat1[i][j] +mat2[i][j];
}
System.out.println();
}
System.out.println("Resultant Matrix is");
for(int i=0;i<row;i++)
{
for(int j=0;j<col;j++)
{
System.out.print(result[i][j]+"\t");
}
System.out.println();
}
}
}