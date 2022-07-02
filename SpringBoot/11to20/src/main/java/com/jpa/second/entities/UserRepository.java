package com.jpa.second.entities;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.jpa.second.dao.User;

@Repository
public interface UserRepository extends CrudRepository<User , Integer>{
	public List<User> findByName(String name);
	
	@Query("Select u from User u")
	public List<User> getAllUser();
	
	@Query("select u from User u where u.name =:n")
	public List<User> getUserByName(@Param("n")String name);
}
