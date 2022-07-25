import React from "react";
import MainMenu from "./MainMenu";
import logo from "../assets/images/sneakerspotlogo.png";
import whiteLogo from "../assets/images/logo.png";
import '../header.css';

const Header = () => {
    return (
        <header>
            <img src={whiteLogo} className='logo' alt="sneakerspot logo" />
            <MainMenu />
        </header>
    );
}

export default Header;