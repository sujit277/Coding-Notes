import java.io.FileInputStream;
import java.sql.Connection;
import java.sql.DriverManager;

public class InsertImage {
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
            String query = "insert into images(pic) values (?)";
            
            //Create a PreparedStatement object
            java.sql.PreparedStatement pstmt = con.prepareStatement(query);
            FileInputStream fis = new FileInputStream("test.png");
            pstmt.setBinaryStream(1,fis,fis.available());
            pstmt.executeUpdate();
            System.out.println("Data inserted");

            con.close();
        }catch(Exception e){
            e.printStackTrace();
        }
	}
}
