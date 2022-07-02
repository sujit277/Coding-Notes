import java.util.Iterator;
import java.util.Stack;
public class StackDemo {
	public static void main(String args[]) {
		
		Stack st = new Stack();
		st.push(1);
		st.push(2);
		st.push(3);
		st.push(4);
		st.push("Sujit");
		
		//Checking Whether stack is empty or not
		System.out.println(st.empty());
		//Printing top element of the stack
		System.out.println(st.peek());
		System.out.println(st.search(4));
		
		System.out.println("Implenting Iterator Interface on Stack");
		Iterator itr = st.iterator();
		while(itr.hasNext()) {
			System.out.println(itr.next());
		}
	}
}
