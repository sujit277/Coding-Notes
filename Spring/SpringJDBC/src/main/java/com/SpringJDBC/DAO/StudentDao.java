package com.SpringJDBC.DAO;

import java.util.List;
import com.SpringJDBC.Entites.Student;

public interface StudentDao {
	public int insert(Student student);
	public int change(Student student);
    public int delete(int studentId);
    public Student getStudent(int studentId);
    public List<Student> getAllStudents();
}
