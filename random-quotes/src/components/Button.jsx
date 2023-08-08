import React from "react";

function Button({ children, onClick, color = "primary", fontSize }) {
    const buttonStyle = {
        fontSize: fontSize || "inherit",
    };

    return (
        <button
            className={`btn btn-${color}`}
            onClick={onClick}
            style={buttonStyle}
        >
            {children}
        </button>
    );
}

export default Button;
