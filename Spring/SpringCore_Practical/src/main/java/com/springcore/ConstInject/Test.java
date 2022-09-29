package com.springcore.ConstInject;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {
	
	public static void main(String args[]) {
	System.out.println( "Hello World!" );
    ApplicationContext context = new ClassPathXmlApplicationContext("com/springcore/ConstInject/Config.xml");
    A a  = (A) context.getBean("add");
    a.doSum();
    
	}
}
