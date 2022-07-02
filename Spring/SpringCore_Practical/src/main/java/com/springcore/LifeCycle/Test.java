package com.springcore.LifeCycle;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {
	public static void main(String args[]) {
		System.out.println( "Hello World!" );
        AbstractApplicationContext context = new ClassPathXmlApplicationContext("com/springcore/LifeCycle/Config.xml");
        /*Samosa s1 = (Samosa) context.getBean("s1");
        System.out.println(s1);
        Pepsi s2 = (Pepsi) context.getBean("s2");
        System.out.println(s2);
        context.registerShutdownHook();*/
        
        context.registerShutdownHook();
        Example example = (Example) context.getBean("example");
        System.out.println(example);
	}
}
