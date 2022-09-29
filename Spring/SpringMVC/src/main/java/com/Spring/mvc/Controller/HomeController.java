package com.Spring.mvc.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {
	
	@GetMapping("/home")
	public String home(Model model) {
		System.out.println("This is Home Url");
		model.addAttribute("Name","Sujit Kumar Verma");
	    return "home";
	}
	
	@GetMapping("/help")
	public ModelAndView help() {
		System.out.println("This is Help Controller");
		//Creating Model and View Object
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("Company", "EPAM Systems");
		//Setting View Name
		modelAndView.setViewName("help");
		return modelAndView;
	}

}
