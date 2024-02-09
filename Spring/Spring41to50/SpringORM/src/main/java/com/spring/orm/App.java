package com.spring.orm;

import java.util.List;
import java.util.Scanner;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.spring.orm.DAO.StudentDao;
import com.spring.orm.Entities.Student;

public class App {
	public static void main(String[] args) {
		System.out.println("Hello World!");
		ApplicationContext context = new ClassPathXmlApplicationContext("config.xml");
		StudentDao studentDao = context.getBean("studentDao", StudentDao.class);
		// Student student = new Student(101, "Sujit Kumar Verma", "Bokaro");
		// int r = studentDao.insert(student);
		// System.out.println("Done ... " + r);
		Scanner sc = new Scanner(System.in);
		boolean go = true;
		while (go) {
			System.out.println("PRESS 1 for Adding New Student");
			System.out.println("PRESS 2 for Displaying all Student");
			System.out.println("PRESS 3 for Getting Single Student");
			System.out.println("PRESS 4 for Deleting Single Student");
			System.out.println("PRESS 5 for Updating Single Student");
			System.out.println("PRESS 6 for Exit");

			try {
				int input = Integer.parseInt(sc.nextLine());

				switch (input) {
				case 1:
					// Add a New Student
					System.out.println("Enter Student Id");
					int id = Integer.parseInt(sc.nextLine());
					System.out.println("Enter Student Name");
					String name = sc.nextLine();
					System.out.println("Enter Student City Name");
					String city = sc.nextLine();

					Student s = new Student();
					s.setStudentId(id);
					s.setStudentName(name);
					s.setStudentCity(city);
					int r = studentDao.insert(s);
					System.out.println(r + " Student Added");
					System.out.println("*************************************");
					System.out.println();

					break;
				case 2:
					// Display All Students
					System.out.println("**************************************");
					List<Student> allStudents = studentDao.getAllStudents();
					for (Student st : allStudents) {
						System.out.println("ID "+st.getStudentId());
						System.out.println("Name "+st.getStudentName());
						System.out.println("City "+st.getStudentCity());
						System.out.println("______________________________________");
					}
					System.out.println("*******************************************");
					break;
				case 3:
					// Get Single Student Data
					System.out.println("Enter Student Id");
					int sId = Integer.parseInt(sc.nextLine());
					Student student = studentDao.getStudent(sId);
					System.out.println("ID "+student.getStudentId());
					System.out.println("Name "+student.getStudentName());
					System.out.println("City "+student.getStudentCity());
					System.out.println("______________________________________");
					
					break;	
				case 4:
					// Delete Student
					System.out.println("Enter Student Id");
					int stId = Integer.parseInt(sc.nextLine());
					studentDao.deleteStudent(stId);
					System.out.println("Student Deleted");
					break;
				case 5:
					// Update the Student
					System.out.println("Enter Student Id");
					int sid = Integer.parseInt(sc.nextLine());
					System.out.println("Enter Student Name");
					String sname = sc.nextLine();
					System.out.println("Enter Student City Name");
					String scity = sc.nextLine();

					Student s1 = new Student();
					s1.setStudentId(sid);
					s1.setStudentName(sname);
					s1.setStudentCity(scity);
					studentDao.updateStudent(s1);
					System.out.println("Student Updated");

					break;
				case 6:
					go = false;
					break;
				}

			} catch (Exception e) {
				System.out.println("Invalid Input Try with Another One !!");
				System.out.println(e.getMessage());
			}
		}
		System.out.println("Thank you for Using Our Application");
		System.out.println("See you soon");

	}
}
