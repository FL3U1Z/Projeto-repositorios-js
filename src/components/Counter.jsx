export function Counter(){
    let counter = 0;  
    function increment() {
        counter ++;
    }
    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Incrementar
            </button>
        </div>
    );
}