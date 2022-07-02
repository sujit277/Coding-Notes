package com.jpa.second;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.jpa.second.dao.User;
import com.jpa.second.entities.UserRepository;

@SpringBootApplication(scanBasePackages = "com.jpa.second")
public class Application {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(Application.class, args);
		UserRepository userRepository = context.getBean(UserRepository.class);
		
		//Creating Object of User
		
		/*User user = new User();
		user.setName("Mansi Mallick");
		user.setCity("Assam");
		user.setStatus("I am Junior Software Engineeer");*/
		
		//Saving Single User
		//User u1 = userRepository.save(user);
		//System.out.println(u1);
		
		//Saving Multiple Users
		/*User u2 = new User();
		u2.setName("Samridhi Sinha");
		u2.setCity("Jharkhand");
		u2.setStatus("I am Associate Software Engineeer");
		
		User u3 = new User();
		u3.setName("Kirti Patel");
		u3.setCity("Bangalore");
		u3.setStatus("I am Associate Software Engineeer");
		
		//Saving Multiple User
		List<User> users = List.of(u2,u3);
		Iterable<User> result = userRepository.saveAll(users);
		
		result.forEach(data->{
			System.out.println(data);
		});
		
		System.out.println("Done...");*/
				
		
		//Updating User;
		/*Optional<User> optional = userRepository.findById(4);
		User user = optional.get();
		user.setCity("Himachal Pradesh");
		User result = userRepository.save(user);
		System.out.println(result);*/
		
		//Finding Users
		/*Iterable<User> itr = userRepository.findAll();
		Iterator<User> iterator = itr.iterator();
		while(iterator.hasNext()){
			User user = iterator.next();
			System.out.println(user);
		}*/
		
		//Deleting Users By Id
		/*userRepository.deleteById(6);
		System.out.println("Deleted");*/
		
		//Fetch Request Using Custom Finder Methods
		//List<User> users = userRepository.findByName("Mansi Mallick");
		//users.forEach(data -> System.out.println(data));
		
		//Fetch Request Using JPQL
		/*List<User> allUser = userRepository.getAllUser();
		allUser.forEach(data ->{
			System.out.println(data);
		});*/
		
		//Fetch Request Using Native SQL
		List<User> userName = userRepository.getUserByName("Mansi Mallick");
		userName.forEach(data ->{
			System.out.println(data);
		});
	}

}
