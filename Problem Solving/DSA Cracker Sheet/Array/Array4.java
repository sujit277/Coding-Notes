/* Java Program to Move Negative Elements to one side of the Array */

/* Brute Force Approach */

import java.util.Scanner;

class Array4 {
   public static void main(String args[]) {
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter the size of the Array");
      int size = sc.nextInt();
      int arr[] = new int[size];
      System.out.println("Enter the Elements of the Array");
      for (int i = 0; i < size; i++) {
         arr[i] = sc.nextInt();
      }
      int count = 0;
      int arrnew[] = new int[size];
      for (int i = 0; i < size; i++) {
         if (arr[i] > 0) {
            arrnew[count++] = arr[i];
         }
      }
      for (int i = 0; i < size; i++) {
         if (arr[i] < 0) {
            arrnew[count++] = arr[i];
         }
      }
      System.out.println("The Updated Array Elements are");
      for (int i = 0; i < count; i++) {
         System.out.println(arrnew[i]);
      }
   }
}


/*
Approach
-----------
1.Take a new array of the equivalent size of the given array.
2.Using two for loops, first for loop for picking positive elements of the array and second for loop
for picking negative elements of the array.
3.At the end we will positive and negative elements of the array segregated side by side.


 Time Complexity -- O(n)
 Space Complexity -- O(n)
/*
