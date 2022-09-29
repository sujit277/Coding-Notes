/* Java Program to reverse String with Each Original Word */

import java.util.*;
public class String7 {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your String");
        String name = sc .nextLine();
        String words[] = name.split(" ");
        String ReverseStr = "";
        for(int i = words.length - 1;i>=0;i--){
            ReverseStr = ReverseStr + words[i]+" ";
        }
        System.out.println(ReverseStr);
    }
}


/*
Approach
-------------
1.Splitting String line into string words array.
2.Traversing from the end of the string words array to the begining and doing concatenation simultaneously.
3.At the end we will get the required String.


  Time Complexity  -- O(n)
  Space Complexity -- O(n)

*/
