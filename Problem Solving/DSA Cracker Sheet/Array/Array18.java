/* Java Program to Print Unique Elements of the Array */

import java.util.*;

public class Array18 {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Size of the Array");
        int size = sc.nextInt();
        int arr[] = new int[size];
        int i=0,j=0;
        for (i = 0; i < size; i++) {
            arr[i] = sc.nextInt();
        }
        sc.close();
        for (i = 0; i < size; i++) {
            for (j = 0; j < i; j++) {
                if (arr[i] == arr[j]) {
                    break;
                }
            }
            if (i == j) {
                System.out.println(arr[i]);
            }
        }
        
    }
}
