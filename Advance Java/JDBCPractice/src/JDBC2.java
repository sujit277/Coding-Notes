import java.sql.*;
import java.util.*;
public class JDBC2 {
	public static void main(String args[]) {
		Connection con = null;
		try
		{
			Class.forName("com.mysql.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/practice","root","Admin");
			Statement statement = con.createStatement();
			Scanner sc = new Scanner(System.in);
			System.out.println("Enter UserName");
			String username = sc.next();
			System.out.println("Enter the Userid");
			int userid = sc.nextInt();
			
			int result = statement.executeUpdate("insert into user values('"+username+"',"+userid+")");
			if(result>0) 
			{
				System.out.println("Recorded Inserted Successfully");
			}
			else
			{
				System.out.println("Something Wrong");
			}
			System.out.println("Records in the Database are");
			ResultSet rs = statement.executeQuery("select * from user");
			while(rs.next()) {
				System.out.println("Employee Name "+rs.getString(1)+" and "+"Employee Id "+rs.getString(2));
			}
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
		finally
		{
			try
			{
				con.close();
			}
			catch(SQLException e)
			{
				e.printStackTrace();
			}
		}
	}
}
