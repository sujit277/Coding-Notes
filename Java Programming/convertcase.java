//Java Program to Convert Uppercase into lowercase and Lowercase to Uppercase
import java.util.*;
class convertcase{
public static void main(String args[])
{
Scanner sc = new Scanner(System.in);
String name = sc.nextLine();
int length = name.length();
StringBuffer newstr = new StringBuffer(name); 
for(int i=0;i<length;i++)
{
char c = name.charAt(i);
if(Character.isUpperCase(c))
{
newstr.setCharAt(i,Character.toLowerCase(c));
}
if(Character.isLowerCase(c))
{
newstr.setCharAt(i,Character.toUpperCase(c));
}
}
System.out.println("Swapped Case String is "+ newstr);
}
} 