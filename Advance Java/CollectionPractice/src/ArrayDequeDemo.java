import java.util.ArrayDeque;
public class ArrayDequeDemo {
	public static void main(String args[]) {
		
		ArrayDeque dq = new ArrayDeque();
		
		dq.add(10);
		dq.add(20);
		dq.add(30);
		dq.add(40);
		dq.add(50);
		
		System.out.println(dq);
		
		//Making ArrayDeque Empty
		//dq.clear();
		//System.out.println(dq);
		
		//Adds Element at the Beginning of the ArrayDeque
		dq.addFirst(120);
		//Adds Element at the Last of the ArrayDeque
		dq.addLast(200);
		
		System.out.println(dq);
		
		
	}
}
