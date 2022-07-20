import React, { useState } from "react";
import Loginbutton from "../components/Loginbutton";
import Logoutbutton from "../components/Logoutbutton";
import Sneaker from "../components/Sneaker";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";

const Profilepage = () => {
    const { user, isAuthenticated } = useAuth0();
    const [ userMetadata, setUserMetadata ] = useState(null);

    const sneakers = useSelector(state => state.sneakers);
    console.log(sneakers);

    const yourListings = sneakers.sneakers.filter(sneaker => {
        return sneaker.ownerid === user.email;
    });

    return (
        <div className="profilepage">
            {isAuthenticated && (
                <section>
                <div>
                    <h1>Welcome, {user.nickname}</h1>
                    <p>Your email is {user.email}</p>
                    <Logoutbutton />
                </div>
                <div>
                    <h1>Your Sneakers</h1>
                    <div className="sneaker-card-container">
                    {yourListings.map(sneaker => {
                        return <Sneaker key={sneaker.id} sneaker={sneaker} />
                    })
                    }
                    </div>
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