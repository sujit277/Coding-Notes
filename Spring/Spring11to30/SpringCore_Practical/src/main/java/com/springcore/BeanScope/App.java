package com.springcore.BeanScope;


import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {

	public static void main(String[] args) {
		 ApplicationContext context = new ClassPathXmlApplicationContext("com/springcore/BeanScope/Config.xml");
		    Student stud1 =  context.getBean("student",Student.class);
		    System.out.println(stud1);
		    System.out.println(stud1.hashCode());
		    Student stud2 =  context.getBean("student",Student.class);
		    System.out.println(stud2);
		    System.out.println(stud2.hashCode());
	}

}
