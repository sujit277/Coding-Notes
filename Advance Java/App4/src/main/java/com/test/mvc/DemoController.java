package com.test.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DemoController {
	
	@RequestMapping("/home")
	public String home() {
		System.out.println("This is Home URL");
		return "display";
	}
}
