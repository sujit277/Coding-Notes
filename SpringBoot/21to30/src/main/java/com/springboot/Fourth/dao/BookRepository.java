package com.springboot.Fourth.dao;

import org.springframework.data.repository.CrudRepository;

import com.springboot.Fourth.Entities.Book;

public interface BookRepository extends CrudRepository<Book,Integer>{
	public Book findById(int id);
}
