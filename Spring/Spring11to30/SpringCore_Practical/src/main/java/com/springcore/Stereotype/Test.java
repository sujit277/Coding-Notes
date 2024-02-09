package com.springcore.Stereotype;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {
	
	public static void main(String args[]) {
		
	    ApplicationContext context = new ClassPathXmlApplicationContext("com/springcore/Stereotype/Config.xml");
	    Student stud =  context.getBean("student",Student.class);
	    System.out.print(stud);	
		
	}
}
 