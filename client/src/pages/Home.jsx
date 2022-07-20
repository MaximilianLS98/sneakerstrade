import React, { useState, useEffect } from "react";
import Sneaker from "../components/Sneaker";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { populateSneakers } from "../features/sneakers/sneakerSlice";

const Home = () => {
    const [loading, setLoading] = useState(true);

    const { user, isAuthenticated } = useAuth0();
    const [ userMetadata, setUserMetadata ] = useState(null);

    const sneakerState = useSelector(state => state.sneakers);

    const dispatch = useDispatch();

    useEffect(() => {
        fetch("http://localhost:3000/sneakers")
            .then(res => res.json())
            .then(res => {
                window.localStorage.setItem("sneakers", JSON.stringify(res));
                res.type = 'populateSneakers';
                dispatch(populateSneakers(res));
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
                <div className="sneaker-card-container">
                {sneakerState.sneakers.map(sneaker => {
                    return <Sneaker key={sneaker.id} sneaker={sneaker} />
                })
                }
                </div> 
            </div>}
        </div>
    );
}

export default Home;