import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;
import java.util.*;

class Employee{
	
	String name,companyName;
	int age;
	
	Employee(String name,String companyName,int age){
		this.name = name;
		this.companyName = companyName;
		this.age = age;
	}
	
	public String toString() {
		return (name+" "+companyName+" "+age);
	}
}

public class EmpHashSet {
	public static void main(String args[]) {
		
		Set s = new HashSet();
		
		Employee e1 = new Employee("Sujit","EPAM Systems",23);
		Employee e2 = new Employee("Chandani","Informatica",26);
		Employee e3 = new Employee("Puja","CommonWeath Bank",30);
		
		s.add(e1);
		s.add(e2);
		s.add(e3);
		System.out.println(s.toString());
	}
}
