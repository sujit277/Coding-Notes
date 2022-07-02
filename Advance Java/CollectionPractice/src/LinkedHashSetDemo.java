import java.util.Iterator;
import java.util.LinkedHashSet;
public class LinkedHashSetDemo {
	
	public static void main(String args[]) {
		LinkedHashSet lhst = new LinkedHashSet();
		lhst.add("First");
		lhst.add("Second");
		lhst.add("Third");
		lhst.add("Fourth");
		lhst.add("Five");
		
		Iterator  itr = lhst.iterator();
		while(itr.hasNext()) {
			System.out.println(itr.next());
		}
	}
}