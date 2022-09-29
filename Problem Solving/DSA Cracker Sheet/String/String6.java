/* Java Program to Reverse the Each Word of the String */

import java.util.*;

public class String6 {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Your String");
        String name = sc.nextLine();
        String words[] = name.split(" ");
        String reverseWord = "";
        for(int i=0;i<words.length;i++){
            StringBuffer sb = new StringBuffer(words[i]);
            sb.reverse();
            reverseWord = reverseWord + sb.toString()+" ";
        }
        System.out.println(reverseWord);
    }
}


/*
Approach
-----------
1.Splitting String Line to the String words Array.
2.Picking every words of the string words array and reversing and concatening simultenously.

  Time Complexity -- O(n)
  Space Complexity -- O(n)

*/
