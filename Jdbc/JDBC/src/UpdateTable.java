import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.sql.Connection;
import java.sql.DriverManager;

public class UpdateTable {
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
            String query = "update person set name=?, city=? where id=?";
            
            //create a PreparedStatement object
            java.sql.PreparedStatement pstmt = con.prepareStatement(query);
            
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            System.out.println("Enter new name");
            String name = br.readLine();
            System.out.println("Enter new city");
            String city = br.readLine();
            System.out.println("Enter person id");
            int id = Integer.parseInt(br.readLine());
            pstmt.setString(1,name);
            pstmt.setString(2,city);
            pstmt.setInt(3, id);
            
            pstmt.executeUpdate();
            System.out.println("Data updated");

            con.close();
        }catch(Exception e){
            e.printStackTrace();
        }
	}

}
