// Java Program to check whether a given String is Pallendrum or not

import java.util.*;
class pallendrum{
public static void main(String args[]){
Scanner sc = new Scanner(System.in);
System.out.println("Enter Your String");
String name = sc.nextLine();
String copy = name;
System.out.println(copy);
StringBuilder newname = new StringBuilder(copy);
newname = newname.reverse();
System.out.println(newname);
}
}