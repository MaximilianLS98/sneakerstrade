import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const UserProfiles = () => {
    const location = useLocation();
    const { pathname } = location;
    console.log(pathname);

    useEffect(() => {
        const getUserInfo = async () => {
            const response = await fetch("/api/user");
            const userInfo = await response.json();
            console.log(userInfo);
        }
        getUserInfo();
    }
    , []);

    return (
        <div>
            <img src="https://media.istockphoto.com/vectors/male-profile-flat-blue-simple-icon-with-long-shadow-vector-id522855255?k=20&m=522855255&s=612x612&w=0&h=fLLvwEbgOmSzk1_jQ0MgDATEVcVOh_kqEe0rqi7aM5A=" alt="default profile" />
            <h1>Username</h1>
            <p>Some kind of Bio for the user that they define themselves</p>
            <p>Time since registration on the site</p>
        </div>
    )
}

export default UserProfiles;