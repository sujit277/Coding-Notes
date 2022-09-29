/* Java progarm to find if there is any Subarray in a array whose Sum is Zero */

/* Brute Force Approach */

import java.util.Scanner;

class Array15 {
   public static void main(String args[]) {
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter the Size of the Array");
      int size = sc.nextInt();
      int arr[] = new int[size];
      System.out.println("Enter the Elements of the Array");
      for (int i = 0; i < size; i++) {
         arr[i] = sc.nextInt();
      }
      int flag = 0;
      for (int i = 0; i < size; i++) {
         int sum = 0;
         for (int j = i + 1; j < size; j++) {
            sum = sum + arr[j];
            if (sum == 0) {
               flag = 1;
               break;
            }
         }
         if (flag == 1) {
            break;
         }
      }
      if (flag == 1) {
         System.out.println("Array is having Subarray with Sum Zero");
      } else {
         System.out.println("Array is not having Subarray with Sum Zero");
      }
      sc.close();
   }
}

/*
 * Time Complexity -- O(n2)
 * Space Complexity -- O(1)
 */