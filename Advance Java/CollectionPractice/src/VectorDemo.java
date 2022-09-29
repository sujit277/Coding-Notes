import java.util.Enumeration;
import java.util.Vector;
public class VectorDemo {
	public static void main(String args[]) {
		
		Vector v = new Vector();
		System.out.println("Capacity of Vector is "+v.capacity());
		System.out.println("Size of Vector is "+v.size());
		System.out.println("Vector is Empty "+v.isEmpty());
		
		v.add(1);
		v.addElement(2);
		v.add(688);
		v.add(688);
		System.out.println(v);
		
		System.out.println("Implenting Enumeration Interface on Vector");
		//Implementing Enumeration in Vector
		Enumeration enu = v.elements();
		while(enu.hasMoreElements()){
			System.out.println(enu.nextElement());
		}
	}
}
