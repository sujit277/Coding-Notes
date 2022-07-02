/* Java Program to Find the Minimum no of Operations to make an Array Pallindrome */

/* Brute Force Approach */

import java.util.Scanner;

class Array11 {
   public static int Count(int arr[], int size) {
      int i = 0;
      int j = size - 1;
      int count = 0;
      while (i <= j) {
         if (arr[i] == arr[j]) {
            i++;
            j--;
         } else if (arr[i] < arr[j]) {
            i++;
            arr[i] = arr[i] + arr[i - 1];
            count++;
         } else {
            j--;
            arr[j] = arr[j + 1] + arr[j];
            count++;
         }
      }
      return count;
   }

   public static void main(String args[]) {
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter the Size of the Array");
      int size = sc.nextInt();
      int arr[] = new int[size];
      System.out.println("Enter the Elements of the Array");
      for (int i = 0; i < size; i++) {
         arr[i] = sc.nextInt();
      }
      int result = Count(arr, size);
      System.out.println("The Minimum no of Operations to Make Pallindrome " + result);
      sc.close();
   }
}

/*
 * Time Complexity -- O(n)
 * Space Complexity -- O(1)
 */