import React,{ useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Logoutbutton from "./Logoutbutton";
import { useNavigate } from 'react-router-dom';

const MainMenu = () => {
    const blocker = useRef(null);
    const menu = useRef(null);
    // const checkBoxRef = useRef(null);
    const [checked, setChecked] = React.useState(false);
    const blockerFunc = () => {
        blocker.current.classList.toggle("blocking-div-hide");
        menu.current.classList.toggle("menu-hide");

    }
    const navigate = useNavigate();
    const moveToMessenger = () => {
        navigate('/messenger');
    }
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    // const checkCheckBox = () => {
    //     // const checkBox = checkBoxRef;
    //     // if (checkBox.checked) {
    //     //     checkBox.current.checked = false;
    //     //     console.log("not checked");
    //     //     console.log(checkBoxRef.current.checked, "this should be unchecked");

    //     // } else {
    //     //     checkBox.current.checked = true;
    //     //     console.log("checked", checkBox.checked)
    //     //     console.log(checkBoxRef.current.checked, "this is ref");
    //     // }
    // }

    const handleCheck = (e) => {
        setChecked(!checked);
        blockerFunc();
        if(e.target.classList.contains("button-messenger")) {
            moveToMessenger();
        }
    }


    return (
        <>
       <nav className="main-nav">
        <label className="label">
        <input checked={checked} onChange={(e)=> setChecked(e.target.checked)} type='checkbox'></input>
        <span onClick={blockerFunc}className="menu"> <span className="hamburger"></span> </span>
        <div className="main-nav--list menu-hide" ref={menu}>
            <p>
                <NavLink to="/" className="main-nav--item" onClick={(e) => handleCheck(e)}>Home</NavLink>
            </p>
            {isAuthenticated && <>
            <p>
                <NavLink className={( { isActive } ) => (isActive) ? 'active main-nav--item' : 'inactive main-nav--item'} to="/create" onClick={(e) => handleCheck(e)}>Create Sneaker</NavLink>
            </p>
            <p>
                <NavLink to="/profile" className="main-nav--item" onClick={(e) => handleCheck(e)} >Profile</NavLink>
            </p>
            <p className='nav-item'>
             <button className='button-messenger' onClick={(e) => handleCheck(e)} >Messenger</button>
            </p>
            <div className='nav-item'>
            <Logoutbutton logout={logout} onClick={(e) => handleCheck(e)}/>            
            </div>
            </>}
            {!isAuthenticated && <p>
                <Link to="#" className="main-nav--item button-login" onClick={() => loginWithRedirect()}>Login</Link>
                {/* <Link to="/login" className="main-nav--item" >Login</Link> */}
            </p>}
        </div>
        </label>
    </nav>
        <div ref={blocker} className="blocking-div-hide biggest-div">
        </div></>
    )
}

export default MainMenu;
