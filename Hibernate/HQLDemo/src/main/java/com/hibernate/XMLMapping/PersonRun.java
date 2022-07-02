package com.hibernate.XMLMapping;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class PersonRun {

public static void main(String args[]) {
		
		Configuration cfg = new Configuration();
		cfg.configure("hibernate.cfg.xml");
		SessionFactory factory = cfg.buildSessionFactory();
		Session session = factory.openSession();
		Transaction tx = session.beginTransaction();
		
		//Creating Person Object
		Person person = new Person(201,"Sujit","Bokaro","672628");
		session.save(person);
		
		tx.commit();
		session.close();
		factory.close();
	}
}
