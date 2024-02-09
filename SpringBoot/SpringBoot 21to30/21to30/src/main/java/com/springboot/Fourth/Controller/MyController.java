package com.springboot.Fourth.Controller;

import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MyController {

	@RequestMapping(value="/about", method = RequestMethod.GET)
	public String about(Model model) {
		System.out.println("Inside About Handler");
		model.addAttribute("age","23");
		model.addAttribute("package","6LPA");
		return "about";
	}	
	
	
	@RequestMapping(value="/example-loop", method = RequestMethod.GET)
	public String iterateHandler(Model m) {
		//Creating a List
		List<String> names = List.of("Ankit","Laxmi","Mansi Mallick","Soumya");
		m.addAttribute("names",names);
		return "iterate";
	}
	
	@RequestMapping(value="/condition", method = RequestMethod.GET)
	public String conditionHandler(Model mdl) {
		mdl.addAttribute("isActive",true);
		mdl.addAttribute("gender","Male");
		List<String> names = List.of("Ankit","Laxmi","Mansi Mallick","Soumya");
		mdl.addAttribute("names",names);
		return "condition";
	}
}
