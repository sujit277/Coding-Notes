import java.util.HashSet;
import java.util.Iterator;
public class HashSetDemo {
	public static void main(String args[]) {
		
		HashSet hs =  new HashSet();
		hs.add("DLT");
		hs.add("Accenture");
		hs.add("EPAM Systems");
		hs.add("Deloitte");
		hs.add("Amazon");
		hs.add("Google");
		
		Iterator itr = hs.iterator();
		while(itr.hasNext()) {
			System.out.println(itr.next());
		}
	}
}
