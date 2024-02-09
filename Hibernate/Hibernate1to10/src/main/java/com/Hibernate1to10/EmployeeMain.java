package com.Hibernate1to10;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class EmployeeMain {

	public static void main(String args[]) throws SecurityException {

		System.out.println("Project Started");
		Configuration cfg = new Configuration();
		cfg.configure("hibernate.cfg.xml");
		SessionFactory factory = cfg.buildSessionFactory();

		Employee e1 = new Employee();

		e1.setName("Samraj Verma");
		e1.setEmailId("sujitvrma1230@gmail.com");
		e1.setDesignation("SE");
		e1.setCtc(18);
		e1.setPskill("Java Developer");

		Certificate cetfcte = new Certificate();
		cetfcte.setCourse("The Ghost of the Jungle");
		cetfcte.setDuration("8 Weeks");

		e1.setCerti(cetfcte);

		Session s = factory.openSession();
		Transaction tx = s.beginTransaction();

		// Saving Objects
		s.save(e1);

		tx.commit();
		s.close();
		factory.close();

	}
}
