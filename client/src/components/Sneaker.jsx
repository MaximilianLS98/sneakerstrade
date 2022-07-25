import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import shoeImg from "../assets/images/shoe.png"; 
import { useDispatch } from "react-redux";
import { deleteSneaker } from "../features/sneakers/sneakerSlice";
import { useAuth0 } from "@auth0/auth0-react";
import '../sneaker.css';


const Sneaker = ({ sneaker }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const path = useLocation().pathname;

    const { user } = useAuth0();

    const removeSneaker = () => {
        fetch(`http://localhost:3000/sneakers/${sneaker.id}`, {
            method: "DELETE"
        }).then(res => res.json())
            .then(res => console.log(res))
            .then(() => dispatch(deleteSneaker(sneaker.id)))
            .catch(err => console.log(err));
    }

    const editAndDelete = path === '/profile' ? (user?.email === sneaker.ownerid &&
        <>
        <input  type="button" value="Update" onClick={() => navigate(`/edit/${sneaker.id}`)} />
        <input type="button" value="Delete" onClick={(e) => removeSneaker(e)} />
        </>) : null;

    return (
        <div className="container">
            <div className="card">
                <div className="imgBx">
                    <img className="sneaker-card--img" src={sneaker.imgurl} alt="sneaker" />
                </div>
                <div className="contentBx">
                    <h2>{sneaker.title}</h2>
                    <div className="size">
                        <h3>Size: </h3>
                        <span> {sneaker.size}</span>
                    </div>
                    { editAndDelete }
                    <br></br>
                    <Link to={`/sneaker/${sneaker.id}`}>View</Link>
                </div>
            </div>
        </div>
    );
}

export default Sneaker;