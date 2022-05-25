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
                Incrementar
            </button>
            <br />
            <button type="button" onClick={dcrement}>
                Decrementar
            </button>
        </div>
    );
}