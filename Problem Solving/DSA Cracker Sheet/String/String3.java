/* Java Program to find the Duplicate Characters in a String */

/* Brute Force Approach */

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
   }
}



/*
Approach
--------------
1.Using nested for loop for comparing string letters.
2.If string letters are equal then will be checking count must be equal to 1 and replacing 
  comparing value with "\0" (null).
3.If count not equal to 1 then will be replacing comparing value with "\0" (null).

   Time Complexity -- O(n2)
   Space Complexity -- O(n)
*/