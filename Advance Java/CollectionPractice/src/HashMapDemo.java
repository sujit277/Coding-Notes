import java.util.HashMap;
import java.util.Map;
import java.util.*;
public class HashMapDemo{
	public static void main(String args[]) {
		
		HashMap<Integer,String> hm = new HashMap<Integer,String>();
		hm.put(1,"Infosys");
		hm.put(2, "Wipro");
		hm.put(3, "HCL");
		hm.put(4,"Tech Mahindra");
		
		System.out.println(hm);
		
		//Finding the Value for a Key
		System.out.println("Value of Key 2 is "+hm.get(1));
		
		//Traversing through the HashMap using For Each Method
		hm.forEach((k,v)->{System.out.println(k+" : "+v);});
		
		//Traversing through the HashMap using For Each Loop
		for(Map.Entry mapElement: hm.entrySet()) {
			String value = (String)mapElement.getValue();
			int key = (int)mapElement.getKey();
			System.out.println("Key : "+key+" , "+"Value : "+value);
		}
		
		//Traversing Through HashMap Using Iterator
		
		Iterator hmIterator = hm.entrySet().iterator();
		
		while(hmIterator.hasNext()) {
			Map.Entry mapElement = (Map.Entry)hmIterator.next();
			String value = (String)mapElement.getValue();
			int key = (int)mapElement.getKey();
			System.out.println("Key is "+key+" and "+"Value is "+value);
		}
		
		
	}
}
