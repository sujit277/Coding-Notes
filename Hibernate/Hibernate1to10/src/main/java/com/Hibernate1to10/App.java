package com.Hibernate1to10;

import java.io.IOException;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class App {
	
	public static void main(String[] args) throws IOException {
		
		System.out.println("Project Started");
		Configuration cfg = new Configuration();
		cfg.configure("hibernate.cfg.xml");
		SessionFactory factory = cfg.buildSessionFactory();

		// System.out.println(factory);
		// System.out.println(factory.isClosed());

		// Creating Student Object
		/*
		 * Student st = new Student(); st.setId(106); st.setName("Samar");
		 * st.setCity("Bokaro");
		 * 
		 * 
		 * //Creating Address Object Address ad = new Address();
		 * ad.setStreet("Baker Street"); ad.setCity("Bokaro Steel City");
		 * ad.setOpen(true); ad.setAddedDate(new Date());
		 */

		// Reading file
		/*
		 * try { FileInputStream fis = new
		 * FileInputStream("src/main/java/Screenshot (44).png"); byte[] data = new
		 * byte[fis.available()]; fis.read(data); ad.setImage(data); } catch
		 * (FileNotFoundException e){ e.printStackTrace(); }
		 */

		Session session = factory.openSession();
		Transaction tx = session.beginTransaction();
		// session.save(st);
		// session.save(ad);
		// tx.commit();

		// Getting Records from the Database
		Student student = (Student) session.get(Student.class, 102);
		System.out.println(student);
		session.close();

		System.out.println("Done...");

	}
}
