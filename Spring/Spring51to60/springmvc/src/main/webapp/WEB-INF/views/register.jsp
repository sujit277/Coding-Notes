<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
	crossorigin="anonymous">
</head>
<body>
	<div class="container">
		<div class=row>
			<div class="col-6 mx-auto">

				<form action="processform" method="post">
					<h1>Registration Form</h1>
					<div class="mb-3">
						<label for="email" class="form-label">Email address</label> <input
							type="text" name="email" class="form-control" id="email1">
					</div>
					<div class="mb-3">
						<label for="username" class="form-label">UserName</label> <input
							type="text" name="username" class="form-control" id="username">
					</div>
					<div class="mb-3">
						<label for="password" class="form-label">Password</label> <input
							type="text" name="password" class="form-control" id="password">
					</div>

					<button type="submit" class="btn btn-primary">Submit</button>
				</form>
			</div>
		</div>
	</div>

	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
		crossorigin="anonymous"></script>
</body>
</html>