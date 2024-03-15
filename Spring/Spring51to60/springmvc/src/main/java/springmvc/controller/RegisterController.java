package springmvc.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import springmvc.model.User;

@Controller
public class RegisterController {

	/*
	 * // This we use to assign common Data to model
	 * 
	 * @ModelAttribute public void commonDataforModel(Model m) {
	 * m.addAttribute("movie","12th fail"); m.addAttribute("budget","20"); }
	 */

	@RequestMapping("/register")
	public String home(Model m) {
		System.out.println("This is register url");
		return "register";
	}

	/*
	 * @RequestMapping(path="/processform", method=RequestMethod.POST) public String
	 * handleForm(HttpServletRequest request) { String email =
	 * request.getParameter("email"); String username =
	 * request.getParameter("username"); String password =
	 * request.getParameter("password"); System.out.println("Username is "+ username
	 * +" and email is "+email); return ""; }
	 */

	@RequestMapping(path = "/processform", method = RequestMethod.POST)
	public String handleForm(@RequestParam("email") String email, @RequestParam("username") String username,
			@RequestParam("password") String password, Model m) {
		System.out.println("Username is " + username + " and email is " + email);
		User user = new User();
		user.setEmail(email);
		user.setUsername(username);
		user.setPassword(password);
		m.addAttribute("email", email);
		m.addAttribute("username", username);
		m.addAttribute("password", password);
		m.addAttribute("user", user);
		return "success";
	}

	/*
	 * @RequestMapping(path = "/processform", method = RequestMethod.POST) public
	 * String handleForm(@ModelAttribute User user, Model m) {
	 * System.out.println(user); m.addAttribute("user", user); return "success"; }
	 */
}
