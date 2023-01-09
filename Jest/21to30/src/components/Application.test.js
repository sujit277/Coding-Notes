import { render, screen } from "@testing-library/react"
import Application from "./Application"

describe('Application', () => {
    test('Renders Correctly', () => {
        render(<Application />);

        const nameElement = screen.getByPlaceholderText('Fullname');
        expect(nameElement).toBeInTheDocument();

        const nameElement2 = screen.getByDisplayValue('Sujit Kumar Verma');
        expect(nameElement2).toBeInTheDocument(); 

        const paragraphElement = screen.getByText('All fields are mandatory');
        expect(paragraphElement).toBeInTheDocument();

        const imageElement = screen.getByAltText('Avatar2');
        expect(imageElement).toBeInTheDocument();

        const closeElement = screen.getByTitle('close');
        expect(closeElement).toBeInTheDocument();

        const customElement = screen.getByTestId('custom-element')
        expect(customElement).toBeInTheDocument();
        
    })

})