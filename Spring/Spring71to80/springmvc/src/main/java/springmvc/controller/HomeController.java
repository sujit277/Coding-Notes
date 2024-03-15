package springmvc.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

	@RequestMapping("/home")
	public String home(Model m) {
		m.addAttribute("name", "Sujit Kumar Verma");
		System.out.println("This is home url");
		// Creating runntime error
		String str = null;
		System.out.println(str.length());
		return "home";
	}

	@RequestMapping("/home/{homeid}")
	public String user(@PathVariable("homeid") int homeid) {
		System.out.println("Home id is " + homeid);
		System.out.println("This is home url");
		return "home";
	}

	@RequestMapping("/about")
	public ModelAndView about() {
		System.out.println("This is about url");
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("about");
		modelAndView.addObject("name", "Naveen");
		List<String> friends = new ArrayList<String>();
		friends.add("Sujit Kumar Verma");
		friends.add("Mansi Mallick");
		friends.add("Ashish Gupta");
		friends.add("Payal Singh");
		modelAndView.addObject("friends", friends);
		return modelAndView;
	}

//	@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
//	@ExceptionHandler({ NullPointerException.class, NumberFormatException.class })
//	public String exceptionHandlerNull() {
//		return "null";
//	}

	/*
	 * @ExceptionHandler(value = NullPointerException.class ) public String
	 * exceptionHandlerNull() { return "null"; }
	 */
}
