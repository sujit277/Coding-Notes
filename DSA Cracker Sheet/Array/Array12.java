/*  Java Program to find Maximum Product SubArray */

/* Approach 1 */

import java.util.Scanner;

class Array12 {
    public static int Maxresult(int arr[], int size) {
        int result = arr[0];
        for (int i = 0; i < size; i++) {
            int mul = arr[i];
            for (int j = i + 1; j < size; j++) {
                result = Math.max(result, mul);
                mul = mul * arr[j];
            }
            result = Math.max(result, mul);
        }
        return result;
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the size of the Array");
        int size = sc.nextInt();
        int arr[] = new int[size];
        System.out.println("Enter the Elements of the Array");
        for (int i = 0; i < size; i++) {
            arr[i] = sc.nextInt();
        }
        int result = Maxresult(arr, size);
        System.out.println("Maximum Product of the SubArray in the given Array is " + result);
        sc.close();
    }
}

/* Time Complexity -- O(n2) */