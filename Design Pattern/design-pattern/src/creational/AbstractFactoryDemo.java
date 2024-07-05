package creational;


// Abstract Factory
interface GUIFactory {
    Button createButton();
    Checkbox createCheckbox();
}

// Product A
interface Button {
    void paint();
}

// Product B
interface Checkbox {
    void paint();
}

// Concrete Product A1
class WindowsButton implements Button {
    @Override
    public void paint() {
        System.out.println("Rendering a button in Windows style.");
    }
}

// Concrete Product A2
class MacOSButton implements Button {
    @Override
    public void paint() {
        System.out.println("Rendering a button in macOS style.");
    }
}

// Concrete Product B1
class WindowsCheckbox implements Checkbox {
    @Override
    public void paint() {
        System.out.println("Rendering a checkbox in Windows style.");
    }
}

// Concrete Product B2
class MacOSCheckbox implements Checkbox {
    @Override
    public void paint() {
        System.out.println("Rendering a checkbox in macOS style.");
    }
}

// Concrete Factory 1
class WindowsFactory implements GUIFactory {
    @Override
    public Button createButton() {
        return new WindowsButton();
    }

    @Override
    public Checkbox createCheckbox() {
        return new WindowsCheckbox();
    }
}

// Concrete Factory 2
class MacOSFactory implements GUIFactory {
    @Override
    public Button createButton() {
        return new MacOSButton();
    }

    @Override
    public Checkbox createCheckbox() {
        return new MacOSCheckbox();
    }
}

// Client
class Application {
    private Button button;
    private Checkbox checkbox;

    public Application(GUIFactory factory) {
        button = factory.createButton();
        checkbox = factory.createCheckbox();
    }

    public void paint() {
        button.paint();
        checkbox.paint();
    }
}

public class AbstractFactoryDemo {
    public static void main(String args[]){
        GUIFactory factory;
        if (true) {
            factory = new MacOSFactory();
        } else {
            factory = new WindowsFactory();
        }
        Application app = new Application(factory);
        app.paint();
    }
}
