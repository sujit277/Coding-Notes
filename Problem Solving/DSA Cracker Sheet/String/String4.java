/* Java Program to Check whether one String is rotation of another String */

/* Approach 1 */
import java.util.Scanner;

class String4 {
  public static boolean Arerot(String str1, String str2) {
    if (str1.length() == str2.length() && (str1 + str1).indexOf(str2) != -1) {
      return true;
    } else {
      return false;
    }
  }

  public static void main(String args[]) {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter Your First String");
    String str1 = sc.next();
    System.out.println("Enter Your Second String");
    String str2 = sc.next();
    if (Arerot(str1, str2)) {
      System.out.println("The Second String is the Rotation of First String");
    } else {
      System.out.println("The Second String is not the Rotation of First String");
    }
  }
}




/*
Approach
-----------
1.Checking both the strings are of the equal size or not.
2.Concatening first string with the first string and checking whether second string is present in the
  resultant string or not 
3.If present then second string is the rotation of the rotation of the first string.

   Time Complexity -- O(n2)
   Space Complexity -- O(n)
 */