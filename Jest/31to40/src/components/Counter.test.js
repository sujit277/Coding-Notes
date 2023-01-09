import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Counter from "./Counter.";

describe('Counter', () => {
    test('renders Counter', () => {
        render(<Counter />)
        const headingElement = screen.getByRole("heading");
        expect(headingElement).toBeInTheDocument();

    })

    test('renders a count of 0', () => {
        render(<Counter />);
        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent("0");
    })


    test('click', () => {
        render(
            <div>
                <label htmlFor="checkbox">Check</label>
                <input id="checkbox" type="checkbox" />
            </div>,
        )

        userEvent.click(screen.getByText('Check'))
        expect(screen.getByLabelText('Check')).toBeChecked()
    })
})