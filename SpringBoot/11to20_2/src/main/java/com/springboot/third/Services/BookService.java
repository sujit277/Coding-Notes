package com.springboot.third.Services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.springboot.third.Entities.Book;


@Component
public class BookService {

	private static List<Book> list = new ArrayList<>();
	
	static {
		list.add(new Book(101,"Java Course","Udemy"));
		list.add(new Book(102,"HTML Course","Coursera"));
		list.add(new Book(103,"Database Course","Upgrad"));
	}
	
	//Get All Books
	public List<Book> getAllBooks(){
		return list;
	}
	
	//Get Single Book by Id
	public Book getBookById(int id) {
		Book book = null;
		try {
			book = list.stream().filter(e-> e.getId() == id).findFirst().get();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return book;
	}
	
	//Add the Books
	public Book addBook(Book b) {
		list.add(b);
		return b;
	}
	
	//Delete Book by Id
	public void deleteBookById(int bookId) {
		/*list = list.stream().filter(book ->{
			if(book.getId() != bookId) {
				return true;
			}
			else {
				return false;
			}
		}).collect(Collectors.toList());*/
		
		list = list.stream().filter(book -> book.getId() != bookId).collect(Collectors.toList());
	}
	
	//Update the Book
	public void updateBook(Book book,int bookId) {
		list = list.stream().map(b->{
			if(b.getId() == bookId)
			{
				b.setTitle(book.getTitle());
				b.setAuthor(book.getAuthor());
			}
			return b;
		}).collect(Collectors.toList());
	}
}
