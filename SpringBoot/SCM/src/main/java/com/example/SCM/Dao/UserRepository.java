package com.example.SCM.Dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.SCM.Entities.User;

@Repository
public interface UserRepository extends CrudRepository<User,Integer>{
	
	@Query("select u from User u where u.email=:email")
	public User getUserByUsername(@Param("email") String email);
}
