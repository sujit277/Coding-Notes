package com.springcore.Collection;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {
	public static void main(String args[]) {
		
		System.out.println( "Hello World!" );
        ApplicationContext context = new ClassPathXmlApplicationContext("com/springcore/Collection/colletionConfig.xml");
        Emp emp1 = (Emp) context.getBean("emp1");
        
        System.out.println(emp1.getName());
        System.out.println(emp1.getPhones());
        System.out.println(emp1.getAddresses());
        System.out.println(emp1.getCourses());
	}
}
