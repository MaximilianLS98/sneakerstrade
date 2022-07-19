import React from "react";
import MainMenu from "./MainMenu";
import '../header.css';

const Header = () => {
    return (
        <header>
            <h1 className="header-title">SneakerSpot</h1>
            <MainMenu />
        </header>
    );
}

export default Header;