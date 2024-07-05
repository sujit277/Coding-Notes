package creational;

class Singleton {

    // Private static variable that holds the single instance of the class
    private static Singleton instance;

    // Private constructor to prevent instantiation
    private Singleton(){}

    // Public method to provide access to the instance
    public static Singleton getInstance(){
        if(instance == null){
            //The synchronized block with double-checked locking ensures that the instance is created in a thread-safe manner.
            synchronized (Singleton.class){
                if(instance == null){
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }

    public void showMessage(){
        System.out.println("Singleton Class");
    }
}

public class SingletonDemo{
    public static void main(String args[]){
        Singleton singleton = Singleton.getInstance();
        singleton.showMessage();
    }
}
