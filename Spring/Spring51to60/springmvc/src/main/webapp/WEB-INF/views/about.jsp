<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@page isELIgnored="false"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h1 style="text-align: center">This is a About Page</h1>
	<%
	/* String name = (String) request.getAttribute("name"); */
	%>

	<%-- <h1 style="text-align: center">
		Name is
		<%=name%></h1> --%>

	<h1 style="text-align: center">Name is ${name}</h1>
	<h1 style="text-align: center">Friends are ${friends}</h1>
</body>
</html>