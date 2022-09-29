/* Java Program to find a Triplet whose sum is equal to given number */

/* Brute Force Approach */

import java.util.Scanner;

class Array9 {
   public static void main(String args[]) {
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter the size of the Array");
      int size = sc.nextInt();
      int arr[] = new int[size];
      System.out.println("Enter the Elements of the Array");
      for (int i = 0; i < size; i++) {
         arr[i] = sc.nextInt();
      }
      System.out.println("Enter the Sum Value");
      int sum = sc.nextInt();
      System.out.println("The Pairs are");
      for (int i = 0; i < size - 2; i++) {
         for (int j = i + 1; j < size - 1; j++) {
            for (int k = j + 1; k < size; k++) {
               if (arr[i] + arr[j] + arr[k] == sum) {
                  System.out.println(arr[i] + "," + arr[j] + "," + arr[k]);
                  System.exit(0);
               }
            }
         }
      }
      System.out.println("No Triplet pairs are found");
   }
}



/*
Approach
----------
1.Using nested nested for loop for finding sum of the array elements.
2.Comparing the sum value with the required value.
3.If condition satisfied printing the pairs of the array elements.


  Time Complexity -- O(n3)
  Space Complexity -- O(1)
*/