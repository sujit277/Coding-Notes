package springmvc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import springmvc.model.User;
import springmvc.service.UserService;

@Controller
public class RegisterController {
	@Autowired
	private UserService userService;
	/*
	 * // This we use to assign common Data to model
	 * 
	 * @ModelAttribute public void commonDataforModel(Model m) {
	 * m.addAttribute("movie","12th fail"); m.addAttribute("budget","20"); }
	 */

	@RequestMapping("/register")
	public String home(Model m) {
		System.out.println("This is contact url");
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

	/*
	 * @RequestMapping(path = "/processform", method = RequestMethod.POST) public
	 * String handleForm(@RequestParam("email") String
	 * email, @RequestParam("username") String username,@RequestParam("password")
	 * String password, Model m) { System.out.println("Username is " + username +
	 * " and email is " + email); User user = new User(); user.setEmail(email);
	 * user.setUsername(username); user.setPassword(password);
	 * m.addAttribute("email",email); m.addAttribute("username",username);
	 * m.addAttribute("password",password); m.addAttribute("user",user); return
	 * "success"; }
	 */

	/*
	 * @RequestMapping(path = "/processform", method = RequestMethod.POST) public
	 * String handleForm(@ModelAttribute User user, Model m) {
	 * System.out.println(user); m.addAttribute("user", user); return "success"; }
	 */

	@RequestMapping(path = "/processform", method = RequestMethod.POST)
	public String handleForm(@ModelAttribute("user") User user, BindingResult result) {
		System.out.println(result);
		System.out.println(user);
		if (result.hasErrors()) {
			System.out.println("Error occured");
			return "register";
		}
		System.out.println(user);
		/* m.addAttribute("user", user); */
		this.userService.createUser(user);
		return "success";
	}
}
