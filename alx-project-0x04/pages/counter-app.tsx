import { useState } from "react";

const CounterApp: React.FC = () => {
    const [count, setCount] = useState(0);

    const increment = () => { setCount(count + 1);

    };

    const decrement = () => { setCount(count > 0? count - 1 : 0);

    }

    return(
        <div className="min-h-screen bg-gradient-to-r from-yellow-500 to-pink-500 flex flex-col justify-center items-center text-white">
            {/* title */}
            <h1 className="text-6xl font-extrabold mb-6 ">Fun Counter App </h1>

            {/* title */}
                <p> Current count: {count} {count === 0? " No clicks yet!" : count % 10 == 0 && count ! == 0 ? "You're on fire!" : ""}</p>

                {/* Counter Display */}
                <div className="text-6xl">{count}</div>

                {/* Button */}
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg  transform hover:scale-105" 
                onClick={increment}>Increment</button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg  transform hover:scale-105" 
                onClick={decrement}>Decrement</button>
        </div>
    )
}

export default CounterApp;