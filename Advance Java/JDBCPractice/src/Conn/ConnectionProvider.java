package Conn;
import java.sql.*;
import java.util.*;
public final class ConnectionProvider {
	
	private ConnectionProvider()
	{
		
	}
	
	public static Connection getConnection() {
		Connection con = null;
		try
		{
			Class.forName(DatabaseData.DATABASE_DRIVER);
			con = DriverManager.getConnection(DatabaseData.DATABASE_URL,DatabaseData.DATABASE_USER,DatabaseData.DATABASE_PASSWORD);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return con;
	}

}
