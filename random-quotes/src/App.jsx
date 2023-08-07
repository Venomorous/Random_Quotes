import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Quote from "./components/Quote";

function App() {
    const [count, setCount] = useState(0);

    const buttonMargin = 10; // Adjust this value to control the margin between buttons

    return (
        <div
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
            }}
            className="container"
        >
            {/* <h1>{count}</h1>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: buttonMargin,
                }}
            >
                <Button onClick={() => setCount(count + 1)} color="primary">
                    INCREMENT
                </Button>
                <Button onClick={() => setCount(count - 1)} color="primary">
                    DECREMENT
                </Button>
                <Button onClick={() => setCount(0)} color="primary">
                    RESET
                </Button>
            </div> */}
            <Quote></Quote>
        </div>
    );
}

export default App;
