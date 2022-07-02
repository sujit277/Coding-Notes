/* Java Program to Check Whether an Array is Subset of another Array or not */

/* Brute Force Approach */

import java.util.Scanner;

class Array10 {
   public static boolean check(int arr1[], int arr2[], int size1, int size2) {
      int i = 0, j = 0;
      for (i = 0; i < size2; i++) {
         for (j = 0; j < size1; j++) {
            if (arr2[i] == arr1[j]) {
               break;
            }
         }
         if (j == size1) {
            return false;
         }
      }
      return true;
   }

   public static void main(String args[]) {
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter the size of the first Array");
      int size1 = sc.nextInt();
      int arr1[] = new int[size1];
      System.out.println("Enter the Elements of the first Array");
      for (int i = 0; i < size1; i++) {
         arr1[i] = sc.nextInt();
      }
      System.out.println("Enter the size of the second Array");
      int size2 = sc.nextInt();
      int arr2[] = new int[size2];
      System.out.println("Enter the Elements of the second Array");
      for (int i = 0; i < size2; i++) {
         arr2[i] = sc.nextInt();
      }
      if (check(arr1, arr2, size1, size2)) {
         System.out.println("Array2 is the Subset of Array1");
      } else {
         System.out.println("Array2 is not the Subset of Array1");
      }
      sc.close();
   }
}

/*
 * Time Complexity -- O(n*m)
 * Space Complexity -- O(1)
 */