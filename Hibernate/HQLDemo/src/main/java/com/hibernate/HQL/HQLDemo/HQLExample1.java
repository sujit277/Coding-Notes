package com.hibernate.HQL.HQLDemo;

import java.util.List;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class HQLExample1 {

	public static void main(String[] args) {
		
		Configuration cfg = new Configuration();
		cfg.configure("hibernate.cfg.xml");
		SessionFactory factory = cfg.buildSessionFactory();
		Session s  = factory.openSession();
		Transaction tx = s.beginTransaction();
		
		//Deleting Record from the Database
		//Query q1 = s.createQuery("delete from Student s where s.name =:x");
		//q1.setParameter("x", "Sujit");
		//int result = q1.executeUpdate();
		//System.out.println("Record Deleted");
		
		//Update Record in the Database
		Query q2 = s.createQuery("update Student set city=:c where name =:x");
		q2.setParameter("c", "New Delhi");
		q2.setParameter("x", "Rasi");
		int result = q2.executeUpdate();
		System.out.println(result);
		
		tx.commit();
		s.close();
		factory.close();
	}
}
