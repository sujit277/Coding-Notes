package com.springcore.StandAlone.Collection;

import java.util.List;

public class Person {
	
	private List<String> frineds;

	public List<String> getFrineds() {
		return frineds;
	}

	public void setFrineds(List<String> frineds) {
		this.frineds = frineds;
	}

	@Override
	public String toString() {
		return "Person [frineds=" + frineds + "]";
	}
	
	
}
