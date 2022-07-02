package com.example.server.Controller;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.server.Entities.Login;

@Controller
public class MyController {

	@GetMapping("/form")
	public String openForm(Model m) {
		System.out.println("Opening Form");
		m.addAttribute("login", new Login());
		return "form";
	}

	// Handler for Process Form
	@PostMapping("/process")
	public String processForm(@Valid @ModelAttribute("login") Login login, BindingResult result) {
		if(result.hasErrors()) {
			System.out.println(result);
			return "form";
		}
		System.out.println(login);
		return "success";
	}
}
