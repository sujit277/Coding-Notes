import java.util.PriorityQueue;

public class PriortyQueueDemo {
	public static void main(String args[]) {
		
		PriorityQueue  pq = new PriorityQueue();
		
		pq.add(10);
		pq.add(15);
		pq.add(20);
		pq.add(25);
		pq.add(30);
		
		System.out.println("Printing Top Element of the Priority Queue");
		System.out.println(pq.peek());
		
		System.out.println("Printing Top Element and Removing it from Priorty Queue");
		System.out.println(pq.poll());
		
		System.out.println("Updated Priority Queue");
		System.out.println(pq.peek());
	}
}
