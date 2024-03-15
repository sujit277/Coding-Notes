package com.SpringJDBC;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;

import com.SpringJDBC.DAO.StudentDao;
import com.SpringJDBC.Entites.Student;

public class App 
{
    public static void main( String[] args )
    {
        ApplicationContext context = new ClassPathXmlApplicationContext("com/SpringJDBC/Config.xml");
        //ApplicationContext context = new AnnotationConfigApplicationContext(JdbcConfig.class);
        /*JdbcTemplate template = context.getBean("jdbcTemplate",JdbcTemplate.class);
        
        //Insert Query
        String query = "insert into student(id,name,city) values(?,?,?)";
        
        //Firing Query
        int result = template.update(query,2,"Mansi Mallick","Bangalore");
        System.out.println("Number of Records Inserted "+result);*/
        
        StudentDao studentDao = context.getBean("studentDao",StudentDao.class);
        
        //Inserting into Database
        /*Student student = new Student();
        student.setId(7);
        student.setName("Samraj");
        student.setCity("Assam");
        int result = studentDao.insert(student);
        System.out.println("Student Added "+result);*/
        
        //Updating in Database
        /*Student student = new Student();
        student.setId(7);
        student.setName("Avanya Sital");
        student.setCity("Arunachal Pradesh");
        int r = studentDao.change(student);
        System.out.println("Data Updated "+r);*/
        
        //Deleting in Database
        /*int r = studentDao.delete(7);
        System.out.println("Data Deleted "+r);*/
        
        //Student student = studentDao.getStudent(4);
        //System.out.println(student);
        
        List<Student> students = studentDao.getAllStudents();
        for(Student s:students) {
        	System.out.println(s);
        }
    }
}
