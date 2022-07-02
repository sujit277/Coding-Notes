import java.util.ArrayList;

class Emp{
	
	String name,companyName;
	int age;
	
	Emp(String name,String companyName,int age){
		this.name = name;
		this.companyName = companyName;
		this.age = age;
	}
	
	public String toString() {
		return name+" "+companyName+" "+age;
	}
	
}

public class EmpArrayList{
	
	public static void main(String args[]) {
		ArrayList<Emp> empList = new ArrayList<Emp>();
		
		Emp e1 = new Emp("Sujit","EPAM",23);
		Emp e2 = new Emp("Chandani","Informatica",26);
		Emp e3 = new Emp("Puja","CommonWeathBank",30);
		
		empList.add(e1);
		empList.add(e2);
		empList.add(e3);
		
		System.out.println(empList.toString());
	}
}
