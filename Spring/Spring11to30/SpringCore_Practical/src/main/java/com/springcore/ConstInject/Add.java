package com.springcore.ConstInject;

public class Add {
	private int a;
	private int b;
	
	public Add(double a, double b) {
		this.a = (int)a;
		this.b = (int)b;
		System.out.println("Constructor Double Double is Called");
	}
	
	public Add(int a, int b) {
		this.a = a;
		this.b = b;
		System.out.println("Constructor Int Int is Called");
	}

	public void doSum() {
		System.out.println("Sum is =" + (this.a +this.b));
	}
}
