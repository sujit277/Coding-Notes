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
        sc.close();
    }
}
