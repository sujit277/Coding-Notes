/* Java Program to find the Union of Two Sorted Arrays */

/* Brute Force Approach */
import java.util.Scanner;

class Array7 {
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
      System.out.println("Enter the Elements of the first Array");
      for (int i = 0; i < size2; i++) {
         arr2[i] = sc.nextInt();
      }
      System.out.println("The Union Elements between two Array are");
      int i = 0, j = 0;
      while (i < size1 && j < size2) {
         if (arr1[i] > arr2[j]) {
            System.out.println(arr1[i++] + " ");
         } else if (arr2[j] > arr1[i]) {
            System.out.println(arr2[j++] + " ");
         } else {
            System.out.println(arr2[j++] + " ");
            i++;
         }
      }
      while (i < size1) {
         System.out.println(arr1[i++] + " ");
      }
      while (j < size2) {
         System.out.println(arr2[j++] + " ");
      }
      sc.close();
   }
}

/*
 * Time Complexity -- O(m+n)
 * Space Complexity -- O(m+n)
 */