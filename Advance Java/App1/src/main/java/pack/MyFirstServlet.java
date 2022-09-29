package pack;

import java.io.IOException;
import java.io.*;

import jakarta.servlet.Servlet;
import jakarta.servlet.ServletConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;

public class MyFirstServlet implements Servlet {

    
    public MyFirstServlet() {
        // TODO Auto-generated constructor stub
    }

	
	public void init(ServletConfig config) throws ServletException {
		System.out.println("Servlet Started");
	}

	
	public void destroy() {
		System.out.println("Destroy");
	}

	
	public ServletConfig getServletConfig() {
		return null;
	}

	
	public String getServletInfo() {
		return null; 
	}

	
	public void service(ServletRequest request, ServletResponse response) throws ServletException, IOException {
		System.out.println("Service Method");
		PrintWriter pw = response.getWriter();
		pw.println("Hello Brother");
	}

}
