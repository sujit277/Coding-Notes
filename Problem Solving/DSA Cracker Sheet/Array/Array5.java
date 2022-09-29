/* Java Program to Cyclic Rotate an Array by one */

/* Brute Force Approach */

import java.util.Scanner;

class Array5 {
   public static void main(String args[]) {
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter the size of the Array");
      int size = sc.nextInt();
      int arr[] = new int[size];
      System.out.println("Enter the Elements of the Array");
      for (int i = 0; i < size; i++) {
         arr[i] = sc.nextInt();
      }
      int last = arr[size - 1];
      for (int i = size - 1; i >= 1; i--) {
         arr[i] = arr[i - 1];
      }
      arr[0] = last;
      System.out.println("Updated Array Elements are");
      for (int i = 0; i < size; i++) {
         System.out.println(arr[i]);
      }
   }
}


/* 
Approach
-----------
1.Using last variable to store last element of the array.
2.Moving every element of the array by 1 index towards end.
3.Updating first element of the array by last variable value.


 Time Complexity -- O(n)
 Space Complexity -- O(1)
*/
