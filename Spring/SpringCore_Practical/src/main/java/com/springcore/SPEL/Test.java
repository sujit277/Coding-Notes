package com.springcore.SPEL;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {
	public static void main(String args[]) {
		
		System.out.println( "Hello World!" );
	    ApplicationContext context = new ClassPathXmlApplicationContext("com/springcore/SPEL/Config.xml");
	    Demo d1 = context.getBean("demo",Demo.class);
	    System.out.print(d1);
	}
}
