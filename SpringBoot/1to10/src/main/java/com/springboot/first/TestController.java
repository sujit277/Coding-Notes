package com.springboot.first;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TestController {
	
	@RequestMapping("/")
	public String Home() {
		System.out.println("This is Home Page");
		return "Home";
	}

}
