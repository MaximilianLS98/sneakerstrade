import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import shoeImg from "../assets/images/shoe.png"; 
import { useDispatch } from "react-redux";
import { deleteSneaker } from "../features/sneakers/sneakerSlice";
import { useAuth0 } from "@auth0/auth0-react";

const Sneaker = ({ sneaker }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;

    const { user } = useAuth0();

    const removeSneaker = () => {
        fetch(`http://localhost:3000/sneakers/${sneaker.id}`, {
            method: "DELETE"
        }).then(res => res.json())
            .then(res => console.log(res))
            .then(() => dispatch(deleteSneaker(sneaker.id)))
            .catch(err => console.log(err));
    }

    const redirect = (e) => {
        e.preventDefault();
        navigate(`/sneaker/${sneaker.id}`);
    }

    // const updateSneaker = (e) => {
        // fetch(`http://localhost:3000/sneakers/${sneaker.id}`, {
        //     method: "PATCH",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({


    return (
        <div className="sneaker-card">
            <img className="sneaker-card--img" src={shoeImg} alt="shoe" onClick={(e) => redirect(e) } />
            <h1 className="sneaker-card--title">{sneaker.title}</h1>
            <h3 className="sneaker-card--description">{sneaker.description}</h3>
            <p className="sneaker-card--size">Size: {sneaker.size}</p>
            <p className="sneaker-card--brand">Brand: {sneaker.brand}</p>
            <p className="sneaker-card--ogprice">Original price: {sneaker.originalprice}</p>
            <p className="sneaker-card--id">ID: {sneaker.id}</p>
            <p>Contact: {sneaker.ownerid}</p>
            <div className="sneaker-card--conditon-info">
                <p className="sneaker-card--box">In Box: {sneaker.box}</p>
                <p className="sneaker-card--condition">Condition: {sneaker.wear}</p>
            </div>
            {/* { path === '/profile' && 
                <><input className="sneaker-card--update" type="button" value="Update" />
                <input className="sneaker-card--delete" type="button" value="delete" onClick={(e) => removeSneaker(e)} /></>
            } */}
            { user?.email === sneaker.ownerid &&
                <><input className="sneaker-card--update" type="button" value="Update" onClick={() => navigate(`/edit/${sneaker.id}`)} />
                <input className="sneaker-card--delete" type="button" value="delete" onClick={(e) => removeSneaker(e)} /></>
            }
        </div>
    );
}

export default Sneaker;