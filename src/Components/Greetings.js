import { useState } from "react"

import Output from "./Output";
import Async from "./Async";

const Greetings = () => {
    const [changeText, setChangeText] = useState(false);

    const changeTextHandler = (e) => {
        setChangeText(true)
        // setChangeText((prev)=>!prev)
    }
    
    return (
        <div>
            <h2>Hello world</h2>
            {!changeText && <Output>It's good to see you</Output>}
            {changeText && <Output>Text changed</Output>}
            <button onClick={changeTextHandler}>Change Text</button>
            <Async />
        </div>
    )
}

export default Greetings;