import React, { useState } from "react";
import Loginbutton from "../components/Loginbutton";
import Logoutbutton from "../components/Logoutbutton";
import { useAuth0 } from "@auth0/auth0-react";

const Profilepage = () => {
    const { user, isAuthenticated } = useAuth0();
    const [ userMetadata, setUserMetadata ] = useState(null);

    return (
        <div className="profilepage">
            {isAuthenticated && (
                <div>
                    <h1>Welcome, {user.nickname}</h1>
                    <p>Your email is {user.email}</p>
                    <Logoutbutton />
                </div>
            )}
            {!isAuthenticated && (
                <div>
                    <h1>Login</h1>
                    <Loginbutton />
                </div>
            )}
        </div>
    )
}

export default Profilepage;