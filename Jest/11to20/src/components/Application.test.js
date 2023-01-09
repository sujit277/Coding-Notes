import { render, screen } from "@testing-library/react"
import Application from "./Application"

describe('Application', () => {
    test('Renders Correctly', () => {
        render(<Application />);
        const nameELement = screen.getByRole('textbox', {
            name: "Name",
        });
        expect(nameELement).toBeInTheDocument();

        const nameELement2 = screen.getByLabelText("Name", {
            selector: "input",
        });
        expect(nameELement2).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox', {
            name: "Bio"
        })
        expect(bioElement).toBeInTheDocument();

        const jobHeading = screen.getByRole('heading', {
            /* name:"Data Scientist" */
            level: 2,
        })
        expect(jobHeading).toBeInTheDocument();

        const jobLocationElement = screen.getByRole("combobox");
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole("checkbox");
        expect(termsElement).toBeInTheDocument();

        const termsElement2 = screen.getByLabelText('I agree to the terms and Conditions');
        expect(termsElement2).toBeInTheDocument();

        const submitELement = screen.getByRole("button");
        expect(submitELement).toBeInTheDocument();

        const pageHeading = screen.getByRole("heading", {
            name: "Job Application form"
        })
        expect(pageHeading).toBeInTheDocument();

    })

})