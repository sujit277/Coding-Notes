package com.SpringJDBC;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import com.SpringJDBC.DAO.StudentDao;
import com.SpringJDBC.DAO.StudentDaoImpl;

@Configuration
public class JDBCConfig {
	
    @Bean(name = {"ds"})
	public DriverManagerDataSource getDataSource() {
		DriverManagerDataSource ds = new DriverManagerDataSource();
		ds.setDriverClassName("com.mysql.jdbc.Driver");
		ds.setUrl("jdbc:mysql://localhost:3306/practice");
		ds.setUsername("root");
		ds.setPassword("root");
		return ds;
	}
    
    @Bean(name = {"jdbcTemplate"})
    public JdbcTemplate getTemplate() {
    	JdbcTemplate jdbcTemplate = new JdbcTemplate();
    	jdbcTemplate.setDataSource(getDataSource());
    	return jdbcTemplate;
    }
    
    @Bean(name = {"studentDao"})
    public StudentDao getStudentDao() {
    	StudentDaoImpl studentDao = new StudentDaoImpl();
    	studentDao.setJdbcTemplate(getTemplate());
    	return studentDao;
    }
}
