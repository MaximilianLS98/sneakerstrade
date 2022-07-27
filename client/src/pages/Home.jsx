import React, { useState, useEffect } from "react";
import Sneaker from "../components/Sneaker";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSneakers } from "../features/sneakers/sneakerSlice";
import BrandButtons from "../components/BrandButtons";
import Loginbutton from "../components/Loginbutton";

const Home = () => {
    const sneakerState = useSelector(state => state.sneakers);
    const [loading, setLoading] = useState(true);

    const { user, isAuthenticated } = useAuth0();
    const [ userMetadata, setUserMetadata ] = useState(null);


    const dispatch = useDispatch();

    useEffect(() => {
        const getSneakers = async () => {
            await dispatch(fetchSneakers());
        }
        getSneakers();
        setLoading(false);
    }, []);

    return (
        <div className="sneakerContainer">
            {!isAuthenticated && (
                <div>
                    <h3 className='text-logging'>Log in, or create an account</h3>
                    <Loginbutton />
                    {/* <h1>Welcome, {user.nickname}</h1> */}
                </div>
            )}
            {loading ? <p>Loading...</p> : <div>
                <BrandButtons />
                {/* <h1 className="centered-text brand-heading">All Sneakers</h1> */}
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