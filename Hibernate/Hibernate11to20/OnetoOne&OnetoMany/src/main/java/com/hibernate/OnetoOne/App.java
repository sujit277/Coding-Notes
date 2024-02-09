package com.hibernate.OnetoOne;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class App {
	public static void main(String[] args) {
		System.out.println("Started..");
		Configuration cfg = new Configuration();
		cfg.configure("hibernate.cfg.xml");
		SessionFactory factory = cfg.buildSessionFactory();

		// Creating Question
		Question q1 = new Question();
		q1.setQuestionId(1231);
		q1.setQuestion("What do you mean by Java");

		// Creating Answer
		Answer ans1 = new Answer();
		ans1.setAnswerId(343);
		ans1.setAnswer("Java is a Programming Language");
		ans1.setQuestion(q1);	
		q1.setAnswer(ans1);

		// Creating Question
		Question q2 = new Question();
		q2.setQuestionId(1232);
		q2.setQuestion("What do you mean by JSON");

		// Creating Answer
		Answer ans2 = new Answer();
		ans2.setAnswerId(344);
		ans2.setAnswer("JSON is a Leight weight Data Format");
		ans2.setQuestion(q2);

		q2.setAnswer(ans2);

		// Save
		Session s = factory.openSession();
		Transaction tx = s.beginTransaction();
		s.save(q1);
		s.save(q2);
		s.save(ans1);
		s.save(ans2);
		tx.commit();
		s.close();
		factory.close();
	}
}
