import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Logoutbutton from "./Logoutbutton";
import { useNavigate } from 'react-router-dom';

const MainMenu = () => {
    const navigate = useNavigate();
    const moveToMessenger = () => {
        navigate('/messenger');
    }
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
                <div>
                    <Logoutbutton logout={logout} />
                    
                </div>
                <button className='button-messenger'onClick={moveToMessenger}>Messenger</button>
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