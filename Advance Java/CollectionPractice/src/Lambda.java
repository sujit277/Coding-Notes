import java.util.ArrayList;

public class Lambda {
	public static void main(String args[]) {
		ArrayList<Integer> arrnum = new ArrayList<Integer>();
		arrnum.add(1);
		arrnum.add(2);
		arrnum.add(3);
		arrnum.add(4);
		arrnum.add(5);
		
		arrnum.forEach((n) -> {System.out.println(n);});
	}
}
