/* Java Program to find Common Elements in 3 Sorted Arrays */

/* Approach 1*/

import java.util.Scanner;

class Array14 {
   public static void Common(int arr1[], int arr2[], int arr3[]) {
      int i = 0, j = 0, k = 0;
      while (i < arr1.length && j < arr2.length && k < arr3.length) {
         if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
            System.out.println(arr1[i]);
            i++;
            j++;
            k++;
         } else if (arr1[i] < arr2[j]) {
            i++;
         } else if (arr2[j] < arr3[k]) {
            j++;
         } else {
            k++;
         }
      }
   }

   public static void main(String args[]) {
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter the size of the first Array");
      int size1 = sc.nextInt();
      int arr1[] = new int[size1];
      System.out.println("Enter the sorted Elements of the first Array");
      for (int i = 0; i < size1; i++) {
         arr1[i] = sc.nextInt();
      }
      System.out.println("Enter the size of the second Array");
      int size2 = sc.nextInt();
      int arr2[] = new int[size2];
      System.out.println("Enter the sorted Elements of the second Array");
      for (int i = 0; i < size2; i++) {
         arr2[i] = sc.nextInt();
      }
      System.out.println("Enter the size of the third Array");
      int size3 = sc.nextInt();
      int arr3[] = new int[size3];
      System.out.println("Enter the sorted Elements of the third Array");
      for (int i = 0; i < size3; i++) {
         arr3[i] = sc.nextInt();
      }
      System.out.println("Common Elements between 3 Sorted Array are:");
      Common(arr1, arr2, arr3);
      sc.close();
   }
}

/*
 * Time Complexity -- O(n1+n2+n3)
 * Space Complexity -- O(1)
 */