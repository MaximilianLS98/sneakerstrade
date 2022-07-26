import React, { useState, useEffect } from "react";
import Loginbutton from "../components/Loginbutton";
import Logoutbutton from "../components/Logoutbutton";
import Sneaker from "../components/Sneaker";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import InboxComponent from "../components/InboxComponentProfile";

const Profilepage = () => {
    const { user, isAuthenticated } = useAuth0();
    const [ userMetadata, setUserMetadata ] = useState(null);

    const sneakers = useSelector(state => state.sneakers);

    const yourListings = sneakers.sneakers.filter(sneaker => {
        return sneaker.ownerid === user.email;
    });

    const username = user.nickname;
    const capitalizedUsername = username.charAt(0).toUpperCase() + username.slice(1);

    console.log(user); // delete this before pushing

    return (
        <div className="profilepage">
            {isAuthenticated && (
                <section>
                <div>
                    <h1>Welcome, {user.given_name || capitalizedUsername}</h1>
                    <img className="profile-picture" src="https://media.istockphoto.com/vectors/male-profile-flat-blue-simple-icon-with-long-shadow-vector-id522855255?k=20&m=522855255&s=612x612&w=0&h=fLLvwEbgOmSzk1_jQ0MgDATEVcVOh_kqEe0rqi7aM5A=" alt="default profile" />
                    <p>Your email is {user.email}</p>
                    <Logoutbutton />
                </div>
                <div>
                    <h1 className="centered-text">Your Sneakers</h1>
                    <div className="sneaker-card-container">
                    {yourListings.map(sneaker => {
                        return <Sneaker key={sneaker.id} sneaker={sneaker} />
                    })
                    }
                    </div>
                    <InboxComponent />

                </div>
                </section>

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