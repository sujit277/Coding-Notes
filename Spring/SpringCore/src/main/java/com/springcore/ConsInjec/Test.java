package com.springcore.ConsInjec;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {
	
	public static void main(String args[]) {
		System.out.println( "Hello World!" );
        ApplicationContext context = new ClassPathXmlApplicationContext("com/springcore/ConsInjec/ciConfig.xml");
        Person p = (Person) context.getBean("person");
        System.out.println(p);
	}
}
