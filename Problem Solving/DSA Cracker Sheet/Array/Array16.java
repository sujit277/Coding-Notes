/* Java Program to Arrange Positive and Negative Elements of an Array Alternatly */

/* Brute Force Approach */

import java.util.Scanner;

class Array16 {
  public static void main(String args[]) {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter the size of the Array");
    int size = sc.nextInt();
    int arr[] = new int[size];
    int arr1[] = new int[size];
    int arr2[] = new int[size];
    int count1 = 0, count2 = 0;
    System.out.println("Enter the Elements of the Array");
    for (int i = 0; i < size; i++) {
      arr[i] = sc.nextInt();
    }
    System.out.println("Elements of the Array in the Alternate Order are:");
    for (int i = 0; i < size; i++) {
      if (arr[i] > 0) {
        arr1[count1++] = arr[i];
      }
    }
    for (int i = 0; i < size; i++) {
      if (arr[i] < 0) {
        arr2[count2++] = arr[i];
      }
    }
    int i = 0, j = 0;
    while (i < count1 && j < count2) {
      System.out.println(arr1[i++]);
      System.out.println(arr2[j++]);
    }
    while (i < count1) {
      System.out.println(arr1[i++]);
    }
    while (j < count2) {
      System.out.println(arr2[j++]);
    }
    sc.close();
  }
}

/*
 * Time Complexity -- O(n)
 * Space Complexity -- O(n)
 */