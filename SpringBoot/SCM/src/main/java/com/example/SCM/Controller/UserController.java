package com.example.SCM.Controller;

import java.security.Principal;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.SCM.Dao.ContactRepository;
import com.example.SCM.Dao.UserRepository;
import com.example.SCM.Entities.Contact;
import com.example.SCM.Entities.User;
import com.example.SCM.Helper.Message;

@Controller
public class UserController {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ContactRepository contactRepository;

	@ModelAttribute
	public void addCommonData(Model model, Principal principal) {
		String userName = principal.getName();
		System.out.println("UserName " + userName);
		User user = this.userRepository.getUserByUsername(userName);
		System.out.println("User" + user);
		model.addAttribute("user", user);
	}

	@GetMapping("/dashboard")
	public String dashboard(Model model, Principal principal) {
		// Not needed because of common ModelAttribute 
		// String userName = principal.getName();
		// System.out.println("UserName "+userName);
		// User user = userRepository.getUserByUsername(userName);
		// System.out.println("User"+user);
		// model.addAttribute("user",user);
		return "dashboard";
	}

	@GetMapping("/add_contact_form")
	// Add Contact Form Handler
	public String addContactForm(Model model, Principal principal) {
		model.addAttribute("contact", new Contact());
		return "add_contact_form";
	}

	// Processing Form Data
	@PostMapping("/process_contact")
	public String processContact(@ModelAttribute Contact contact, Principal principal, HttpSession session) {
		try {
			System.out.println("Data" + contact);
			String name = principal.getName();
			User user = this.userRepository.getUserByUsername(name);
			contact.setUser(user);
			user.getContacts().add(contact);
			this.userRepository.save(user);
			System.out.println("Added to the Database");
			// Success Message
			session.setAttribute("message", new Message("Your Contact is Saved Successfully", "alert-success"));
		} catch (Exception e) {
			System.out.println("ERROR " + e.getMessage());
			e.printStackTrace();
			// Error Message
			session.setAttribute("message", new Message("Something went Wrong", "alert-danger"));

		}
		return "add_contact_form";
	}

	// Show Contacts Handler
	@GetMapping("/show_contacts/{page}")
	public String showContacts(@PathVariable("page") Integer page, Model m, Principal principal) {
		String userName = principal.getName();
		User user = this.userRepository.getUserByUsername(userName);
		Pageable pageable = PageRequest.of(page, 5);
		Page<Contact> contacts = this.contactRepository.findContactsByUser(user.getId(), pageable);
		m.addAttribute("contacts", contacts);
		m.addAttribute("currentPage", page);
		m.addAttribute("totalPages", contacts.getTotalPages());
		return "show_contacts";
	}

	// Showing Particular Contact Details
	@GetMapping("/contact_details/{cId}")
	public String showContactDetails(@PathVariable("cId") Integer cId,Model model) {
		System.out.println("CID " + cId);
		Optional<Contact> contactOptional = this.contactRepository.findById(cId);
		Contact contact = contactOptional.get();
		model.addAttribute("contact",contact);
		return "contact_details";
	}
}
