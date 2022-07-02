package com.example.server.Entities;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class Login {
	
	@NotBlank(message="UserName can not be empty")
	@Size(min = 3,max = 12, message="UserName must be between 3-12 Characters")
	private String userName;
	private String email;
	
	public String getUserName() {
		return userName;
	}
	
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	
}
