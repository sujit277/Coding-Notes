/* Java Program to find the Maximum and Minimum Elements of the Array */

/* Brute Force Approach */

import java.util.Scanner;

class Array2 {
   public static void main(String args[]) {
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter the size of the Array");
      int size = sc.nextInt();
      int arr[] = new int[size];
      System.out.println("Enter the Elements of the Array");
      for (int i = 0; i < size; i++) {
         arr[i] = sc.nextInt();
      }
      for (int i = 0; i < size - 1; i++) {
         for (int j = i + 1; j < size; j++) {
            if (arr[i] > arr[j]) {
               int temp = arr[i];
               arr[i] = arr[j];
               arr[j] = temp;
            }
         }
      }
      System.out.println("Sorted Elements of Array are");
      for (int i = 0; i < size; i++) {
         System.out.println(arr[i]);
      }
      System.out.println("The Biggest Element of Array is " + arr[size - 1]);
      System.out.println("The Smallest Element of Array is " + arr[0]);
   }
}


/* 
Appoarch
1.Use bubble sort technique to sort the array elements in the ascending order.
2.Printing the first and last element of the resultant array as maximum and minimum element.


  Time Complexity -- O(n2)
  Space Complexity -- O(1)
/*
