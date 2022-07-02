package pack;

import java.io.IOException;
import java.sql.*;
import java.io.*;
import jakarta.servlet.GenericServlet;
import jakarta.servlet.ServletConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;


public class StudentServlet extends GenericServlet {

	public void init(ServletConfig config) throws ServletException {
		System.out.println("Servlet Started");
	}
	
	public void destroy() {
		System.out.println("Servlet Destroyed");
	}

	public void service(ServletRequest request, ServletResponse response) throws ServletException, IOException {
		
		PrintWriter out = response.getWriter();
		String name = request.getParameter("name");
		String email = request.getParameter("email");
		String pack = request.getParameter("package");
		String mobile = request.getParameter("mobile");
		String designation = request.getParameter("designation");
		try
		{
			Class.forName("com.mysql.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/demo", "root", "root");
			Statement st = con.createStatement();
			String qry = "insert into employee values('"+name+"','"+email+"','"+pack+"','"+mobile+"','"+designation+"')";
			int result = st.executeUpdate(qry);
			if(result>0) {
				out.println("Record Inserted Successfully");
			}
			else
			{
				out.println("Record Insertion Failed");
			}
			
		}
		catch(Exception e)
		{
			out.println(e);
		}
	}

}
