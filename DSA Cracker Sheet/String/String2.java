/* Java Program to Check Whether a String is Pallendrum or not */

/* Brute Force Approach */

import java.util.Scanner;

class String2 {
   public static void main(String args[]) {
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter Your String");
      String str = sc.nextLine();
      String strnew = "";
      for (int i = str.length() - 1; i >= 0; i--) {
         strnew = strnew + str.charAt(i);
      }
      if (str.equals(strnew)) {
         System.out.println("The Given String is Pallendrum");
      } else {
         System.out.println("The Given String is not Pallendrum");
      }
      sc.close();
   }
}

/*
 * Time Complexity -- O(n)
 * Space Complexity -- O(n)
 */