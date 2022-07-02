/* Java Program to find the Duplicate Characters in a String */

/* Approach 1 */

import java.util.Scanner;

class String3 {
   public static void main(String args[]) {
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter Your String");
      String str = sc.nextLine();
      char strnew[] = str.toCharArray();
      for (int i = 0; i < str.length() - 1; i++) {
         int Count = 1;
         for (int j = i + 1; j < str.length(); j++) {
            if (strnew[i] == strnew[j]) {
               if (strnew[j] != '\0' && Count == 1 && strnew[j] != ' ') {
                  System.out.print(strnew[i]);
               }
               strnew[j] = '\0';
               Count++;
            }
         }
      }
      sc.close();
   }
}

/*
 * Time Complexity -- O(n2)
 * Space Complexity -- O(n)
 */