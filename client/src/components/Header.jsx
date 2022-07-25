import React from "react";
import { useNavigate } from "react-router-dom";
import MainMenu from "./MainMenu";
import logo from "../assets/images/sneakerspotlogo.png";
import whiteLogo from "../assets/images/logo.png";
import '../header.css';

const Header = () => {

    const navigate = useNavigate();

    const redirectHome = () => {
        navigate("/");
    }

    return (
        <header className="headerContainer">
            <img src={whiteLogo} className='logo' alt="sneakerspot logo" onClick={(e) => redirectHome(e)} />
            <MainMenu />
        </header>
    );
}

export default Header;