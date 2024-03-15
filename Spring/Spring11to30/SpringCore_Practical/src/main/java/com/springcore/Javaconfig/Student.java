package com.springcore.Javaconfig;

import org.springframework.stereotype.Component;

@Component("student")
public class Student {
	public void study() {
		System.out.println("Student is reading a book");
	}
}

