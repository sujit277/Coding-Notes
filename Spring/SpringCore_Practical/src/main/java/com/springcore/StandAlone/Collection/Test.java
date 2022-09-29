package com.springcore.StandAlone.Collection;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {
	
	public static void main(String args[]) {
		System.out.println( "Hello World!" );
	    ApplicationContext context = new ClassPathXmlApplicationContext("com/springcore/StandAlone/Collection/Config.xml");
	    Person person1 =  context.getBean("person1",Person.class);
	    System.out.println(person1);
	    
	}
}
