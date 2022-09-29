import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
public class ArrayListDemo {
	public static void main(String args[]) {
		ArrayList<Integer> a1 = new ArrayList<Integer>();
		for(int i=0;i<5;i++)
		{
			a1.add(i);
		}
		for(int i=0;i<a1.size();i++)
		{
			System.out.println(a1.get(i)+" ");
		}
		
		List a2 = new ArrayList();
		a2.add(a1);
		a2.add("Hello");
		a2.add(2,"Good");
		a2.add("Sujit Kumar Verma");
		System.out.println(a2);
		
		//Implementing iterator method of Collection Interface
		//return type of iterator method is Iterator Interface
		System.out.println("Implenting Itertor Method");
		Iterator i = a2.iterator();
		while(i.hasNext()) {
			Object object = (Object) i.next();
			System.out.println(object);
		}
		
		//Implementing listIterator method of List Interface
		//return type of List iterator method is ListIterator Interface
		System.out.println("Implementing List Iterator Method");
		ListIterator li = a2.listIterator();
		while(li.hasNext()) {
			Object object = (Object) li.next();
			System.out.println(object);
		}
		
		System.out.println("Traversing Elements in the Backward Direction");
		while(li.hasPrevious()) {
			Object object = (Object) li.previous();
			System.out.println(object);
		}
	}
}
