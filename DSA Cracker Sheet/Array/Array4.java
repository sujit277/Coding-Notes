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
      sc.close();
   }
}

/*
 * Time Complexity -- O(n)
 * Space Complexity -- O(n)
 */