import java.sql.*;


public class PreparedStatement {
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
            pstmt.setString(1,"Sujit");
            pstmt.setString(2,"Bokaro");
            pstmt.executeUpdate();
            System.out.println("Data inserted");

            con.close();
        }catch(Exception e){
            e.printStackTrace();
        }
	}
}
