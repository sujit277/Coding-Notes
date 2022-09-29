package pack;

import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.*;
import java.io.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


public class DemoParam extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		ServletConfig config = getServletConfig();
		String UserName = config.getInitParameter("User");
		String PassWord = config.getInitParameter("Password");
		out.println("UserName is "+UserName);
		out.println("Password is "+PassWord);
	}

}
