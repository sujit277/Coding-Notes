/* Java Program to Merge two Sorted Array Without using Extra Space */

/* Brute Force Approach */

import java.util.Scanner;

class Array17 {
   public static void main(String args[]) {
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter the size of the first Array");
      int size1 = sc.nextInt();
      int arr1[] = new int[size1];
      for (int i = 0; i < size1; i++) {
         arr1[i] = sc.nextInt();
      }
      System.out.println("Enter the size of the second Array");
      int size2 = sc.nextInt();
      int arr2[] = new int[size2];
      for (int i = 0; i < size2; i++) {
         arr2[i] = sc.nextInt();
      }
      int k = 0;
      int arrnew[] = new int[size1 + size2];
      for (int i = 0; i < size1; i++) {
         arrnew[k++] = arr1[i];
      }
      for (int i = 0; i < size2; i++) {
         arrnew[k++] = arr2[i];
      }
      for (int i = 0; i < k; i++) {
         System.out.println(arrnew[i]);
      }
      sc.close();
   }
}

/*
 * Time Complexity -- O(m+n)
 * Space Complexity -- O(m+n)
 */