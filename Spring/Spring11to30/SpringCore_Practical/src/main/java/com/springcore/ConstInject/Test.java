package com.springcore.ConstInject;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {
	
	public static void main(String args[]) {
    ApplicationContext context = new ClassPathXmlApplicationContext("com/springcore/ConstInject/Config.xml");
    Add a  = (Add) context.getBean("add");
    a.doSum();
    
	}
}
