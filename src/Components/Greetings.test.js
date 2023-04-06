
import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";
import userEvent from "@testing-library/user-event";

import { act } from "react-dom/test-utils";


describe('Greeting component', () => {
    
    test('render hello world as a text', () => {
        // arrange
        render(<Greetings />)
    
        // act
    
        //assert
        const helloWorldElement = screen.getByText('Hello world')
        expect(helloWorldElement).toBeInTheDocument();
    })

    test('good to see you when button was not clicked', () => {
        render(<Greetings />);

        const good_to_see_you_ele = screen.getByText('good to see you', {exact:false});
        expect(good_to_see_you_ele).toBeInTheDocument();    
    })


    test('rendeer "changed" if button clicked', () => {
        //arrahge
        render(<Greetings />);

        // act
        act(() => {
            const buttonElement = screen.getByRole('button')
            userEvent.click(buttonElement)
        })

        // assert
        const chenged_text_ele = screen.getByText('Text changed');
        expect(chenged_text_ele).toBeInTheDocument();
    })

    test('good to see you text should not visible if button clicked', () => {
        render(<Greetings />);

        act(() => {
            const buttonElement = screen.getByRole('button');
            userEvent.click(buttonElement)
        })

        const output_ele = screen.queryByText('good to see you', { exact: false });
        expect(output_ele).toBeNull()

    })

})