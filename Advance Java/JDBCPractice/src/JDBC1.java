import java.sql.*;
import java.util.*;
public class JDBC1 {
	public static void main(String args[]) {
		Connection con = null;
		try
		{
			Class.forName("com.mysql.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/practice","root","Admin");
			Statement statement = con.createStatement();
			int result = statement.executeUpdate("insert into user values('Puja',30)");
			if(result>0) 
			{
				System.out.println("Recorded Inserted Successfully");
			}
			else
			{
				System.out.println("Something Wrong");
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
