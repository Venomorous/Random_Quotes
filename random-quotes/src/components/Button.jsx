import React from "react";

function Button({ children, onClick, color = "primary" }) {
    return (
        <button className={`btn btn-${color}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
