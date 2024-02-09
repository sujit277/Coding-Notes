package com.springboot.Fourth.Services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.springboot.Fourth.Entities.Book;
import com.springboot.Fourth.dao.BookRepository;

@Component
public class BookService {

@Autowired
private BookRepository bookRepository;
	
	//Get All Books
	public List<Book> getAllBooks(){
		List<Book> list = (List<Book>)this.bookRepository.findAll();
		return list;
	}
	
	//Get Single Book by Id
	public Book getBookById(int id) {
		Book book = null;
		try {
			book = this.bookRepository.findById(id);
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return book;
	}
	
	//Add the Books
	public Book addBook(Book b) {
		Book result = this.bookRepository.save(b);
		return result;
	}
	
	//Delete Book by Id
	public void deleteBookById(int bookId) {
		this.bookRepository.deleteById(bookId);
	}
	
	//Update the Book
	public void updateBook(Book book,int bookId) {
		book.setId(bookId);
		this.bookRepository.save(book);
	}
}
