import React from "react"; 
import { useAuth0 } from "@auth0/auth0-react";
import Loginbutton from "../components/Loginbutton";

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <Loginbutton />
        </div>
    );
}

export default Login;