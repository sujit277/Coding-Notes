package com.hibernate.HQL.HQLDemo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class SecondLevelCaching {
	public static void main(String args[]) {
		
		Configuration cfg = new Configuration();
		cfg.configure("hibernate.cfg.xml");
		SessionFactory factory = cfg.buildSessionFactory();
		
		//Creating Session1
		Session s1  = factory.openSession();
		Student student1 = s1.get(Student.class,102);
		System.out.println(student1);
		s1.close();
		
		//Creating Session2
		Session s2 = factory.openSession();
	    Student student2 = s2.get(Student.class,102);
	    System.out.println(student2);
	    s2.close();
		
	}
}
