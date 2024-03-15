package com.springcore.Javaconfig;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.stereotype.Component;

public class App {

	public static void main(String[] args) {
		
		 ApplicationContext context = new AnnotationConfigApplicationContext(JavaConfig.class);
		    Student stud1 =  context.getBean("getStudent",Student.class);
//		    Student stud2 =  context.getBean("student",Student.class);
		    System.out.println(stud1);
		    stud1.study();
	}

}
