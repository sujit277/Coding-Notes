import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.sql.Connection;
import java.sql.DriverManager;

public class DynamicInput {
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
            String query = "insert into person(name, city) values (?,?)";
            
            //create a PreparedStatement object
            java.sql.PreparedStatement pstmt = con.prepareStatement(query);
            
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            System.out.println("Enter name");
            String name = br.readLine();
            System.out.println("Enter city");
            String city = br.readLine();
            
            pstmt.setString(1,name);
            pstmt.setString(2,city);
            
            pstmt.executeUpdate();
            System.out.println("Data inserted");

            con.close();
        }catch(Exception e){
            e.printStackTrace();
        }
	}

}
