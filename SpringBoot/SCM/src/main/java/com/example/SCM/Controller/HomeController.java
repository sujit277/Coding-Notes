package com.example.SCM.Controller;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.SCM.Dao.UserRepository;
import com.example.SCM.Entities.User;
import com.example.SCM.Helper.Message;

@Controller
public class HomeController {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	// Home Route Get Request
	@GetMapping("/home")
	public String home() {
		return "home";
	}

	// About Route Get Request
	@GetMapping("/about")
	public String about() {
		return "about";
	}

	// Login Route Get Request
	@GetMapping("/login")
	public String login() {
		return "login";
	}

	// Signup Route Get Request
	@GetMapping("/signup")
	public String signup(Model m) {
		m.addAttribute("user", new User());
		return "signup";
	}

	// Handler for Registering User
	@RequestMapping(value = "/do_register", method = RequestMethod.POST)
	public String registerUser(@Valid @ModelAttribute("user") User user, BindingResult res, Model m,
			HttpSession session) {
		try {
			if (res.hasErrors()) {
				System.out.println("ERROR " + res.toString());
				return "signup";
			}
			user.setRole("USER");
			user.setEnabled(true);
			user.setPassword(passwordEncoder.encode(user.getPassword()));
			System.out.println(user);
			User result = this.userRepository.save(user);
			m.addAttribute("user", user);
			session.setAttribute("message", new Message("Successfully Registered", "alert-success"));
		} catch (Exception e) {
			e.printStackTrace();
			m.addAttribute("user", user);
			session.setAttribute("message", new Message("Something went Wrong", "alert-danger"));
		}
		return "signup";
	}

}
