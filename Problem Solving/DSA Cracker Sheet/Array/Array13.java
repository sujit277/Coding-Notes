/* Java Program to find the duplicate ELements in the Array */

/* Brute Force Approach */

import java.util.Scanner;

class Array13 {
   public static void main(String args[]) {

      Scanner sc = new Scanner(System.in);
      System.out.println("Enter the size of the Array");
      int size = sc.nextInt();
      int arr[] = new int[size];
      System.out.println("Enter the Elements of the Array");
      for (int i = 0; i < size; i++) {
         arr[i] = sc.nextInt();
      }
      sc.close();
      System.out.println("Repeated Elements of the Array are:");
      int i = 0, j = 0;
      for (i = 0; i < size - 1; i++) {
         int Count = 1;
         for (j = i + 1; j < size; j++) {
            if (arr[i] == arr[j]) {
               if (Count == 1 && arr[j] != '\0') {
                  System.out.println(arr[i]);
               }
               arr[j] = '\0';
               Count++;
            }
         }
      }
   }
}

/*
 * Time Complexity -- O(n2)
 * Space Complexity -- O(1)
 */