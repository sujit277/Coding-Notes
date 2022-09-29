import java.util.Iterator;
import java.util.LinkedList;
import java.util.ListIterator;
public class LinkedListDemo {
	
	public static void main(String args[]) {
		
		LinkedList l = new LinkedList();
		l.add("One");
		l.add("Two");
		l.add("Three");
		l.add("Four");
		l.add("Five");
		System.out.println(l);
		
		System.out.println("Traversal Using Iterator Interface");
		Iterator itr = l.iterator();
		while(itr.hasNext()) {
			System.out.println(itr.next());
		}
		
		System.out.println("Traversal Using List Iterator Interface");
		ListIterator listr = l.listIterator();
		while(listr.hasNext()) {
			System.out.println(listr.next());
		}
		
		
		//LinkedList as a Deque
		System.out.println("LinkedList as a Deque");
		LinkedList ls = new LinkedList(l);
		ls.add("Six");
		ls.add("Seven");
		ls.add("Eight");
		ls.addLast("Good Night");
		ls.addFirst("Good Morining");
		ls.add(2,"Good Afternoon");
		System.out.println(ls);
		
		//LinkedList as a Stack
		LinkedList lsst = new LinkedList();
		lsst.push("Stack First");
		lsst.push("Stack Second");
		lsst.push("Stack Third");
		lsst.push("Stack Fourth");
		System.out.println(lsst);
		System.out.println(lsst.peek());
		
		
	}
}
