package com.Hibernate.OnetoMany;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;


public class App {
	public static void main(String[] args) {
		System.out.println("Hello World!");
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
		

		// Creating Answer
		Answer ans2 = new Answer();
		ans2.setAnswerId(344);
		ans2.setAnswer("JSON is a Leight weight Data Format");
		ans2.setQuestion(q1);

		List<Answer> list = new ArrayList<Answer>();
		list.add(ans1);
		list.add(ans2);
		
		q1.setAnswers(list);

		// Save
		Session s = factory.openSession();
		Transaction tx = s.beginTransaction();
		s.save(q1);
		s.save(ans1);
		s.save(ans2);
		
		Question q = (Question) s.get(Question.class, 1231);
		System.out.println(q.getQuestion());
		for(Answer a:q.getAnswers()) {
			System.out.println(a.getAnswer());
		}
		
		tx.commit(); 
		s.close();
		factory.close();
	}
}
