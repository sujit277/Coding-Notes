package com.example.SCM.Dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.SCM.Entities.Contact;

public interface ContactRepository extends CrudRepository<Contact, Integer> {
	//Pagination
	 
	@Query("from Contact as c where c.user.id=:userId")
	public Page<Contact> findContactsByUser(@Param("userId") int userId,Pageable pePageable);
}
