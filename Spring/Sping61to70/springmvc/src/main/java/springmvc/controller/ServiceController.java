package springmvc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/first")
public class ServiceController {
	@RequestMapping(path= "/home")
	public String home(Model m) {
		m.addAttribute("name","Paypal Singh");
		System.out.println("This is home page in first url");
		return "home";	
	}
}
