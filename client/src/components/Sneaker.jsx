import React from "react";
import shoeImg from "../assets/images/shoe.png"; 

const Sneaker = ({ sneaker }) => {

    const removeSneaker = () => {
        fetch(`http://localhost:3000/sneakers/${sneaker.id}`, {
            method: "DELETE"
        }).then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div className="sneaker-card">
            <img className="sneaker-card--img" src={shoeImg} alt="shoe" />
            <h1 className="sneaker-card--title">{sneaker.title}</h1>
            <h3 className="sneaker-card--description">{sneaker.description}</h3>
            <p className="sneaker-card--size">Size: {sneaker.size}</p>
            <p className="sneaker-card--brand">Brand: {sneaker.brand}</p>
            <p className="sneaker-card--ogprice">Original price: {sneaker.originalprice}</p>
            <div className="sneaker-card--conditon-info">
                <p className="sneaker-card--box">In Box: {sneaker.box}</p>
                <p className="sneaker-card--condition">Condition: {sneaker.wear}</p>
            </div>
            <input className="sneaker-card--delete" type="button" value="delete" onClick={(e) => removeSneaker(e)}/>
        </div>
    );
}

export default Sneaker;