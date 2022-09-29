import java.sql.*;
import java.util.*;
public class JDBC3 {
	public static void main(String args[]) {
		Connection con = null;
		try
		{
			Class.forName("com.mysql.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/practice","root","Admin");
			Scanner sc = new Scanner(System.in);
			System.out.println("Enter UserName");
			String username = sc.next();
			System.out.println("Enter the Userid");
			int userid = sc.nextInt();
			PreparedStatement pt = con.prepareStatement("insert into user value(?,?)");
			pt.setString(1,username);
			pt.setInt(2, userid);
			int result = pt.executeUpdate();
			if(result>0) 
			{
				System.out.println("Recorded Inserted Successfully");
			}
			else
			{
				System.out.println("Something Wrong");
			}
			System.out.println("Records in the Database are");
			ResultSet rs = pt.executeQuery("select * from user");
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
