import React, {useState} from 'react';

function Counter({initCount = 0}) {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(initCount);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default Counter;
