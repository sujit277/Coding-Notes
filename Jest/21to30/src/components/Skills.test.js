import Skills from "./Skills";
import { render, screen } from "@testing-library/react";

describe('Skills', () => {
    const skills = ['HTML', 'CSS', 'Javascript'];
    test('renders correctly', () => {
        render(<Skills skills={skills} />);
        const listElement = screen.getByRole('list');
        expect(listElement).toBeInTheDocument();
    })

    test('render a list of skills', () => {
        render(<Skills skills={skills} />);
        const listElement = screen.getAllByRole('listitem');
        expect(listElement).toHaveLength(3);
    })

    test('renders Heading', () => {
        render(<Skills skills={skills} />);
        const headingElement = screen.getByText(/Kumar/);
        expect(headingElement).toBeInTheDocument();
    })

    test("renders Login button", () => {
        render(<Skills skills={skills} />);
        const loginButton = screen.getByRole("button", {
            name: "Login"
        })
        expect(loginButton).toBeInTheDocument();
    })

    test('Start Learning button is not rendered', () => { 
        render(<Skills skills={skills} />);
        const startLearningButton = screen.queryByRole('Button',{
            name:"Start Learning"
        });
        expect(startLearningButton).not.toBeInTheDocument();
    })
});