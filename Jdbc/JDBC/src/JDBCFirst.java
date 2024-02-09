import java.sql.*;
public class JDBCFirst {
	public static void main(String args[]){
        try{
            // Step 1: Loading the driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Step 2: Creating a connection
            String url = "jdbc:mysql://localhost:3306/jdbc";
            String username = "root";
            String password = "Papa@7941";
            Connection con = DriverManager.getConnection(url, username, password);

            if(con.isClosed()){
                System.out.println("Connection is Closed");
            }else{
                System.out.println("Connection is Created");
            }
        }catch(Exception e){
            e.printStackTrace();
        }
	}
}
