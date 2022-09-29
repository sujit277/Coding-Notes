import java.util.TreeSet;
public class TreeSetDemo {
	public static void main(String args[]) {
		
		TreeSet ts = new TreeSet();
		ts.add(98);
		ts.add(12);
		ts.add(67);
		ts.add(32);
		ts.add(1);
		
		
		//ts.add("Hello");
		//Adding This will add Error Because at a time It Sorts either Number or String
		
		System.out.println(ts);
	}
	
	
}
