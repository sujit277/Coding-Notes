package com.Hibernate20to32.HQL;

import java.util.Arrays;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.query.NativeQuery;

public class HQLExample3 {

	public static void main(String[] args) {

		Configuration cfg = new Configuration();
		cfg.configure("hibernate.cfg.xml");
		SessionFactory factory = cfg.buildSessionFactory();
		Session s = factory.openSession();

		// Executing SQL Queries
		String q = "select * from student";
		NativeQuery nq = s.createSQLQuery(q);
		List<Object[]> list = nq.list();
		for (Object[] student : list) {
			System.out.println(Arrays.deepToString(student));
		}

		s.close();
		factory.close();
	}
}
