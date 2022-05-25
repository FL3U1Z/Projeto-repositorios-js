import { useState } from 'react';

export function Counter(){
    const [counter, setCounter] = useState(0);  

    function increment() {
        setCounter(counter + 1);
    }

    function dcrement() {
        setCounter(counter - 1);
    }
    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Incrementar +1
            </button>
            <br />
            <button type="button" onClick={dcrement}>
                Decrementar -1
            </button>
        </div>
    );
}