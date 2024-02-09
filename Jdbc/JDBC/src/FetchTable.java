import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class FetchTable {
	public static void main(String args[]){
        try{
            // Loading the driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Creating a connection
            String url = "jdbc:mysql://localhost:3306/jdbc";
            String username = "root";
            String password = "Papa@7941";
            Connection con = DriverManager.getConnection(url, username, password);
            
            //Create a Query
            String query = "select * from person";
            
            //create a Statement object
            Statement smt = con.createStatement();
            ResultSet set = smt.executeQuery(query);
            
            while(set.next()) {
            	int id = set.getInt(1);
            	String name = set.getString(2);
            	String city = set.getString(3);
            	System.out.println("Name is "+ name +", City is "+ city + " and Id is "+id);
            }

            con.close();
        }catch(Exception e){
            e.printStackTrace();
        }
	}
}
