//Java Program to Print Different Elements of the String

import java.util.Scanner;

class String5 {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Your String");
        String st = sc.nextLine();
        char ct[] = new char[st.length()];
        ct = st.toCharArray();
        System.out.println(ct);
        for (int i = 0; ct[i] != '\0'; i++) {
            for (int j = i + 1; ct[j] != '\0'; j++) {
                if (ct[i] == ct[j]) {
                    for (int k = j; ct[k] != '\0'; k++) {
                        ct[k] = ct[k + 1];
                    }
                }
            }
        }
        System.out.println(ct);
        sc.close();
    }
}