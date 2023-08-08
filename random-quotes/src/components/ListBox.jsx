import React, { useState } from "react";

function ListBox({ onCategorySelect }) {
    const [selectedCategory, setSelectedCategory] = useState(""); // State to manage selected value
    const categories = [
        "beauty",
        "communication",
        "computers",
        "education",
        "failure",
        "happiness",
        "love",
        "success",
        "imagination",
        "friendship",
    ];

    // Event handler for value change
    const handleCategoryChange = (event) => {
        const newSelectedCategory = event.target.value; // Get the selected category from the event
        setSelectedCategory(newSelectedCategory);
        onCategorySelect(newSelectedCategory);
    };

    return (
        <div>
            <h2>Select the quote theme</h2>
            <select
                className="form-select form-select-lg mt-3"
                data-bs-theme="dark"
                // size={7}
                value={selectedCategory}
                onChange={handleCategoryChange}
                // size={7}
                // style={{ maxHeight: "200px", overflowY: "auto" }}
            >
                <option value="">All</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default ListBox;
