import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const MainMenu = () => {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <nav className="main-nav">
            <div className="main-nav--list">
                <p>
                    <Link to="/" className="main-nav--item" >Home</Link>
                </p>
                {isAuthenticated && <>
                <p>
                    <Link to="/create" className="main-nav--item" >Create Sneaker</Link>
                </p>
                <p>
                    <Link to="/profile" className="main-nav--item" >Profile</Link>
                </p>
                </>}
                {!isAuthenticated && <p>
                    <Link to="#" className="main-nav--item" onClick={() => loginWithRedirect()}>Login</Link>
                    {/* <Link to="/login" className="main-nav--item" >Login</Link> */}
                </p>}
            </div>
        </nav>
    )
}

export default MainMenu;