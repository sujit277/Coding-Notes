/* Java Program to reverse the String */

/* Brute Force Approach 

import java.util.Scanner;
class String1{
   public static void main(String args[]){
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter your String");  
    String str = sc.next();
    char ch[] = new char[str.length()];
    ch = str.toCharArray();
    System.out.println("Reverse String is");
    for(int i=ch.length-1;i>=0;i--){
       System.out.print(ch[i]);
     }
  }
}


Approach
--------------
1.Taking character array of the equivalent size of the original string.
2.Asigning string to the character array.
2.Traversing from the end of the character array to the begining to get the revserse string.


 Time Complexity -- O(n)
 Space Complexity -- O(n)
*/



/* Optimal Solution */

import java.util.Scanner;

class String1 {
   public static void main(String args[]) {
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter your String");
      String str = sc.nextLine();
      StringBuffer strnew = new StringBuffer(str);
      strnew.reverse();
      System.out.println("The Reverse String is " + strnew);
   }
}



/*
Approach
-------------
1.Converting given string into StringBuffer.
2.Calling reverse method of the string to get the reverse string.


   Time Complexity -- O(1)
   Space Complexity -- O(n)
*/