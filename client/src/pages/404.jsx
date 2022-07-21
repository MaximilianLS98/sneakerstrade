import React from "react";
import { Link } from "react-router-dom";

const FourOhFour = () => {
    return (
        <div className="forofour-container">
            <h1 className="huge-title">404</h1>
            <h2>The page you are walking towards was not found</h2>
            <h2>Maybe try here instead? <Link to='/' >Sneakers</Link> </h2>
            <img className="imgNotFound" src="data:image/png;base64,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" />
        </div>
    );
}

export default FourOhFour;