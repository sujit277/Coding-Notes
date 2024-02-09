package springmvc.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {
	
	@RequestMapping("/home")
	public String home(Model m) {
		m.addAttribute("name","Sujit Kumar Verma");
		System.out.println("This is home url");
		return "home";	
	}
	
	@RequestMapping("/about")
	public ModelAndView about() {
		System.out.println("This is about url");
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("name","Naveen");
		List<String> friends = new ArrayList<String>();
		friends.add("Sujit Kumar Verma");
		friends.add("Mansi Mallick");
		friends.add("Ashish Gupta");
		friends.add("Payal Singh");
		modelAndView.addObject("friends",friends);
		return modelAndView;	
	}
}





































































































































































































