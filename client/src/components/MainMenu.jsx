import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const MainMenu = () => {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/create">Create Sneaker</Link>
                </li>
                {isAuthenticated && <li>
                    <Link to="/profile">Profile</Link>
                </li>}
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    )
}

export default MainMenu;