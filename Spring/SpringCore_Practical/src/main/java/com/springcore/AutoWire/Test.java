package com.springcore.AutoWire;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {
	public static void main(String args[]) {
		
		System.out.println( "Hello World!" );
	    ApplicationContext context = new ClassPathXmlApplicationContext("com/springcore/AutoWire/Config.xml");
	    Emp emp1 = context.getBean("emp1",Emp.class);
	    System.out.println(emp1);
	}
}
 