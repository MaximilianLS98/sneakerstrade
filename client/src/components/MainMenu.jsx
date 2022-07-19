import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const MainMenu = () => {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <nav className="main-nav">
            <ul className="main-nav--list">
                <li>
                    <Link to="/" className="main-nav--item" >Home</Link>
                </li>
                <li>
                    <Link to="/create" className="main-nav--item" >Create Sneaker</Link>
                </li>
                {isAuthenticated && <li>
                    <Link to="/profile" className="main-nav--item" >Profile</Link>
                </li>}
                {!isAuthenticated && <li>
                    <Link to="/login" className="main-nav--item" >Login</Link>
                </li>}
            </ul>
        </nav>
    )
}

export default MainMenu;