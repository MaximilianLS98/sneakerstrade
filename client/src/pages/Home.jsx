import React, { useState, useEffect } from "react";
import Sneaker from "../components/Sneaker";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
    const [sneakers, setSneakers] = useState([]);
    const [loading, setLoading] = useState(true);

    const { user, isAuthenticated } = useAuth0();
    const [ userMetadata, setUserMetadata ] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/sneakers")
            .then(res => res.json())
            .then(res => {
                setSneakers(res);
                setLoading(false);
            }
            )
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="sneakerContainer">
            {isAuthenticated && (
                <div>
                    <h1>Welcome, {user.nickname}</h1>
                </div>
            )}
            {loading ? <p>Loading...</p> : <div>
                <h1>Sneakers</h1>
                {sneakers.map(sneaker => {
                    return <Sneaker key={sneaker.id} sneaker={sneaker} />
                })
                }
            </div>}
        </div>
    );
}

export default Home;