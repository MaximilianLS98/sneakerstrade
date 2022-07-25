import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const MainMenu = () => {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <nav className="main-nav">
            <div className="main-nav--list">
                <p>
                    <NavLink to="/" className="main-nav--item" >Home</NavLink>
                </p>
                {isAuthenticated && <>
                <p>
                    <NavLink className={( { isActive } ) => (isActive) ? 'active main-nav--item' : 'inactive main-nav--item'} to="/create" >Create Sneaker</NavLink>
                </p>
                <p>
                    <NavLink to="/profile" className="main-nav--item" >Profile</NavLink>
                </p>
                </>}
                {!isAuthenticated && <p>
                    <Link to="/login" className="main-nav--item" >Login</Link>
                </p>}
            </div>
        </nav>
    )
}

export default MainMenu;