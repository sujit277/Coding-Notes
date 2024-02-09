package com.springboot.Fifth;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MyController {

	@RequestMapping(value = "/service", method = RequestMethod.GET)
	public String serviceHandler(Model mdl) {
		return "service";
	}

	@RequestMapping(value = "/home", method = RequestMethod.GET)
	public String homeHandler(Model mdl) {
		return "home";
	}

	@RequestMapping(value = "/basechild", method = RequestMethod.GET)
	public String baseHandler(Model mdl) {
		return "basechild";
	}

	@RequestMapping(value = "/example", method = RequestMethod.GET)
	public String example() {
		return "example";
	}
}
