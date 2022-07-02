// Java Program to eliminate Vowels in the String with Consonants

//Method 1

import java.util.*;
class eliminatevowel{
public static void main(String args[])
{
Scanner sc = new Scanner(System.in);
String string = sc.nextLine();
char vowel[] = {'a','i','e','o','u','A','E','I','O','U'};
List<char> v = Arrays.asList(vowel);
StringBuffer name = new StringBuffer(string);
for(int i=0;i<name.length();i++)
{
 if(v.contains(name.charAt(i)))
{
name.replace(i,i+1,"");
i--;
}
}
System.out.println("Eliminated String is "+name.toString());  
}
}

//Method 2


/*import java.util.*;
class eliminatevowel{
public static void main(String args[])
{
Scanner sc = new Scanner(System.in);
String string = sc.nextLine();
//StringBuilder name = new StringBuilder(string);
string = string.replaceAll("[AEIOUaeiou]","");
System.out.println("Eliminated String is "+string);  
}
}*/
