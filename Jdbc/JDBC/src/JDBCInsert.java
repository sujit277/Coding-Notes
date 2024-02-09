import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class JDBCInsert {
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
            String query = "create table person(Id int(20) primary key auto_increment, name varchar(200) not null, city varchar(400))";
            
            //create a statement
            Statement stmt = con.createStatement(); 
            stmt.executeUpdate(query);
            System.out.println("Table created");

            con.close();
        }catch(Exception e){
            e.printStackTrace();
        }
	}
}
