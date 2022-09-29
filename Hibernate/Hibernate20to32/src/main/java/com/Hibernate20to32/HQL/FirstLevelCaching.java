package com.Hibernate20to32.HQL;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class FirstLevelCaching {

	public static void main(String args[]) {

		Configuration cfg = new Configuration();
		cfg.configure("hibernate.cfg.xml");
		SessionFactory factory = cfg.buildSessionFactory();
		Session s = factory.openSession();

		Student s1 = s.get(Student.class, 102);
		System.out.println(s1);

		System.out.println("Working ...");

		Student s2 = s.get(Student.class, 102);
		System.out.println(s2);

		s.close();
	}
}
