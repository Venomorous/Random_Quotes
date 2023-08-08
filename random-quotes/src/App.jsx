import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Quote from "./components/Quote";
import ListBox from "./components/ListBox";

function App() {
    const [count, setCount] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState(""); // State to manage selected value

    const buttonMargin = 10; // Adjust this value to control the margin between buttons

    const handleCategorySelect = (category) => {
        setSelectedCategory(category); // Update the selected category in the App component
    };

    return (
        <>
            <div className="container text-center mt-5">
                <ListBox onCategorySelect={handleCategorySelect} />
            </div>
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
                <div>
                    <Quote category={selectedCategory} />
                </div>
            </div>
        </>
    );
}

export default App;
