package creational;

class Product {

    private String name;
    private String description;
    private double price;
    private int quantity;

    // Private constructor to prevent direct instantiation
    private Product(Builder builder) {
        this.name = builder.name;
        this.description = builder.description;
        this.price = builder.price;
        this.quantity = builder.quantity;
    }

    // Getters for the fields
    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public double getPrice() {
        return price;
    }

    public int getQuantity() {
        return quantity;
    }

    @Override
    public String toString() {
        return "Product{name='" + name + "', description='" + description + "', price=" + price + ", quantity=" + quantity + "}";
    }

    // Static Builder class
    public static class Builder {
        private String name;
        private String description;
        private double price;
        private int quantity;

        // Methods to set fields
        public Builder setName(String name) {
            this.name = name;
            return this;
        }

        public Builder setDescription(String description) {
            this.description = description;
            return this;
        }

        public Builder setPrice(double price) {
            this.price = price;
            return this;
        }

        public Builder setQuantity(int quantity) {
            this.quantity = quantity;
            return this;
        }

        // Method to build the product
        public Product build() {
            return new Product(this);
        }
    }
}

public class BuilderDemo {

    public static void main(String args[]){
        // Using the Builder to create a Product
        Product product = new Product.Builder()
                .setName("Laptop")
                .setDescription("High-end gaming laptop")
                .setPrice(1500.00)
                .setQuantity(5)
                .build();

        // Print the product details
        System.out.println(product);

    }
}
