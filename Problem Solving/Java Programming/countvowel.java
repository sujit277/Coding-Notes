// Java Program to count the Number of Vowels and consonants in a given String

//Method 1

/*import java.util.*;
class countvowel{
public static void main(String args[]){
Scanner sc = new Scanner(System.in);
String name = sc.nextLine();
int length = name.length();
int countvowel=0,countspace=0,countconso=0;
for(int i=0;i<length;i++)
{
char c =  name.charAt(i);
if(c =='a' || c=='i' || c=='e' || c=='o' || c=='u' || c=='A' || c=='E' || c=='O' || c=='I' || c=='U')
{
countvowel = countvowel +1;
}
else if(c==' ')
{
countspace = countspace+1;
}
else
{
countconso = countconso+1;
}
}
System.out.println("Number of Vowels "+countvowel);
System.out.println("Number of Spaces "+countspace);
System.out.println("Number of consonoanats "+countconso);
}
}*/


//Method 2


import java.util.*;
class countvowel{
public static void main(String args[]){
Scanner sc = new Scanner(System.in);
System.out.println("Enter your String");
String name = sc.nextLine();
int length = name.length();
int countvowel=0,countspace=0,countconso=0,countspecial=0,countdigit=0;
for(int i=0;i<length;i++)
{
char c =  name.charAt(i);
if(c>='A' && c<='Z' || c>='a' && c<='z')
{
if(c =='a' || c=='i' || c=='e' || c=='o' || c=='u' || c=='A' || c=='E' || c=='O' || c=='I' || c=='U')
{
countvowel = countvowel +1;
}
else
{
countconso = countconso+1;
}
}
else if(c==' ')
{
countspace = countspace+1;
}
else if(c>='0' && c<='9')
{
countdigit = countdigit+1;
}
else
{
countspecial = countspecial+1;
}
}
System.out.println("Number of Vowels "+countvowel);
System.out.println("Number of Spaces "+countspace);
System.out.println("Number of consonoanats "+countconso);
System.out.println("Number of special "+countspecial);
System.out.println("Number of digit "+countdigit);
}
}

