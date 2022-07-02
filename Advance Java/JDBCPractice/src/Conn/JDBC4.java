package Conn;
import java.sql.*;
import java.util.*;

public class JDBC4 {
	public static void main(String args[]) {
		
		try
		{
			Connection connection = ConnectionProvider.getConnection();
			Statement statement = connection.createStatement();
			Scanner sc = new Scanner(System.in);
			System.out.println("Enter UserName");
			String username = sc.next();
			System.out.println("Enter the Userid");
			int userid = sc.nextInt();
			PreparedStatement pt = connection.prepareStatement("insert into user value(?,?)");
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
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}
}
