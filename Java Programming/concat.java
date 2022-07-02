//Java program to concatenate Two Strings

//Method 1

/*import java.util.*;
class concat{
public static void main(String args[]){
Scanner sc = new Scanner(System.in);
System.out.println("Enter First String");
String string1 = sc.nextLine();
System.out.println("Enter Second String");
String string2 = sc.nextLine();
//String result = string1.concat(string2);
System.out.println("The concatenated String is "+ (string1.concat(" ")).concat(string2));
}
}*/


//Method 2

/*import java.util.*;
class concat{
public static void main(String args[]){
Scanner sc = new Scanner(System.in);
System.out.println("Enter First String");
String string1 = sc.nextLine();
System.out.println("Enter Second String");
String string2 = sc.nextLine();
System.out.println("Concatenated String is "+(string1+" " +string2));
}
}*/


//Method 3

import java.util.*;
class concat{
public static void main(String args[]){
Scanner sc = new Scanner(System.in);
System.out.println("Enter First String");
String string1 = sc.nextLine();
System.out.println("Enter Second String");
String string2 = sc.nextLine();
StringBuilder sb = new StringBuilder(string1);
System.out.println("Concatenated String is "+(sb.append(" ")).append(string2));
}
}