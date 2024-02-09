package com.Hibernate1to10;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Employee {

	private String name;
	@Id
	private String emailId;
	private String designation;
	private int ctc;
	private String pskill;
	private Certificate certi;
	
	public Employee(String name, String emailId, String designation, int ctc, String pskill, Certificate certi) {
		super();
		this.name = name;
		this.emailId = emailId;
		this.designation = designation;
		this.ctc = ctc;
		this.pskill = pskill;
		this.certi = certi;
	}
	
	public Employee() {
		super();
	}

	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getEmailId() {
		return emailId;
	}
	
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	
	public String getDesignation() {
		return designation;
	}
	
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	
	public int getCtc() {
		return ctc;
	}
	public void setCtc(int ctc) {
		this.ctc = ctc;
	}
	
	public String getPskill() {
		return pskill;
	}
	
	public void setPskill(String pskill) {
		this.pskill = pskill;
	}
	
	public Certificate getCerti() {
		return certi;
	}

	public void setCerti(Certificate certi) {
		this.certi = certi;
	}
}
