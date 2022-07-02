package pack;

import jakarta.servlet.http.HttpServlet;
import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


public class HttpServletDemo extends HttpServlet {
	
	private static final long serialVersionUID = 1L;


	public void service(ServletRequest request,ServletResponse response) throws ServletException, IOException
	{
		response.getWriter().append("Original Service of Http");
	}
	
	protected void service(HttpServletRequest request,HttpServletResponse response) throws IOException, ServletException
	{
		response.getWriter().append("Service of Http Method").append(request.getContextPath());
	}
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().append("doGet Request").append(request.getContextPath());
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().append("doPost Request").append(request.getContextPath());
	}

}
