package pack2;

import jakarta.servlet.GenericServlet;
import java.io.IOException;
import java.io.*;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;


public class AddServlet extends GenericServlet {
	private static final long serialVersionUID = 1L;

	public void service(ServletRequest request, ServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		int x = Integer.parseInt(request.getParameter("first"));
		int y = Integer.parseInt(request.getParameter("second"));
		
		out.println("<html><head>\r\n"
				+ "<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3\" crossorigin=\"anonymous\"><!-- JavaScript Bundle with Popper -->\r\n"
				+ "<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p\" crossorigin=\"anonymous\"></script></head>");
		out.println("<div class='col-8 mx-auto mt-5'>");
		out.println("<h1 style='text-align:center;color:red;margin-top:30px'>Addition of "+x+" & "+y+" "+" is "+(x+y) +"</h1>");
		out.println("</div>");
		out.println("</body></html>");
	}

}
