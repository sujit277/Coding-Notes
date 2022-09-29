package com.Hibernate1to10;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "student_address")
public class Address {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int addressId;

	@Column(length = 50, name = "STREET")
	private String street;

	@Column(length = 100, name = "City")
	private String City;
	private boolean isOpen;

	@Temporal(TemporalType.DATE)
	private Date addedDate;

	@Lob
	private byte[] image;

	public Address(int addressId, String street, String city, boolean isOpen, Date addedDate, byte[] image) {
		super();
		this.addressId = addressId;
		this.street = street;
		City = city;
		this.isOpen = isOpen;
		this.addedDate = addedDate;
		this.image = image;
	}

	public Address() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getAddressId() {
		return addressId;
	}

	public void setAddressId(int addressId) {
		this.addressId = addressId;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getCity() {
		return City;
	}

	public void setCity(String city) {
		City = city;
	}

	public boolean isOpen() {
		return isOpen;
	}

	public void setOpen(boolean isOpen) {
		this.isOpen = isOpen;
	}

	public Date getAddedDate() {
		return addedDate;
	}

	public void setAddedDate(Date addedDate) {
		this.addedDate = addedDate;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "Address [addressId=" + addressId + ", street=" + street + ", City=" + City + ", isOpen=" + isOpen
				+ ", addedDate=" + "]";
	}
}
