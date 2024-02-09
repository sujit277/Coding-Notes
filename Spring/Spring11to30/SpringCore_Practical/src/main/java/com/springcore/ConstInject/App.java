package com.springcore.ConstInject;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App 
{
    public static void main( String[] args )
    {
        ApplicationContext context = new ClassPathXmlApplicationContext("com/springcore/ConstInject/Config.xml");
        Person p = (Person) context.getBean("person");
        System.out.print(p);
    }
}
