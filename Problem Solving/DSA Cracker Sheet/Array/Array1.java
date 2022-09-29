/*Reversing an Array*/

/* Brute Force Approach */

import java.util.Scanner;

class Array1 {
   public static void main(String args[]) {
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter the size of the Array");
      int size = sc.nextInt();
      int arr[] = new int[size];
      System.out.println("Enter the Elements of the Array");
      for (int i = 0; i < size; i++) {
         arr[i] = sc.nextInt();
      }
      System.out.println("The Reverse Elements of Array are ");
      for (int i = size - 1; i >= 0; i--) {
         System.out.println(arr[i]);
      }
   }
}


/* Approach
1.Traverse from the end of the Array till the first element
2.Printing indivisual Array element in each iteration


  Time Complexity -- O(n)
*/