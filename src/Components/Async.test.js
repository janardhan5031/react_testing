import Async from "./Async"

import { render , screen} from '@testing-library/react';


describe('async code testing', () => {
    test('render posts if request succeeds', async () => {
        // override the fetch method to avoid unwanted network calls
        window.fetch = jest.fn();   // creates a mock function
        window.fetch.mockResolvedValueOnce({
            json:async () =>[{id:'p1',title:'fist post'}]
        })


        render(<Async />)

        // const listItemElements = screen.getByRole('listitem');  // get will check the elements instantly
        const listItemElements = await screen.findAllByRole('listitem');  // find will wait for element to be render in screen, it returns promise
        expect(listItemElements).not.toHaveLength(0)
    })
})