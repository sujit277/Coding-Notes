package creational;


interface Prototype {
    Prototype clone();
}

class ConcretePrototype implements Prototype {

    private String name;

    public ConcretePrototype(String name){
        this.name = name;
    }

    // Copy constructor for cloning
    private ConcretePrototype(ConcretePrototype prototype) {
        this.name = prototype.name;
    }

    @Override
    public Prototype clone() {
        return new ConcretePrototype(this);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "ConcretePrototype{name='" + name + "'}";
    }
}


public class PrototypeDemo {
    public static void main(String args[]){
        // Create an original object
        ConcretePrototype original = new ConcretePrototype("Original");
        System.out.println("Original object: " + original);

        // Clone the original object
        ConcretePrototype clone = (ConcretePrototype) original.clone();
        System.out.println("Cloned object: " + clone);

        // Modify the cloned object
        clone.setName("Cloned");
        System.out.println("Modified cloned object: " + clone);

        // Verify the original object is unchanged
        System.out.println("Original object after cloning: " + original);
    }
}
