/* Java Program to find the pairs in a Array whose sum is equal to given Number */

/* Brute Force Approach */

import java.util.Scanner;

class Array8 {
   public static void main(String args[]) {
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter the size of the Array");
      int size = sc.nextInt();
      System.out.println("Enter the Elements of the array");
      int arr[] = new int[size];
      for (int i = 0; i < size; i++) {
         arr[i] = sc.nextInt();
      }
      System.out.println("Enter the Sum Value");
      int sum = sc.nextInt();
      System.out.println("The Listed Pairs are");
      for (int i = 0; i < size - 1; i++) {
         for (int j = i + 1; j < size; j++) {
            if (arr[i] + arr[j] == sum) {
               System.out.println(arr[i] + "," + arr[j]);
            }
         }
      }
   }
}


/* 
Approach
------------
1.Using nested for loop for finding sum of the array elements
2.Comparing the sum value with the required value
3.If Condition statified printing the elements pairs.


 Time Complexity -- O(n2)
 Space Complexity -- O(1)
/*
