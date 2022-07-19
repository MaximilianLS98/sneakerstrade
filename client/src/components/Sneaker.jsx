import React from "react";  

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
            <h1 className="sneaker-card--title">{sneaker.title}</h1>
            <h3 className="sneaker-card--description">{sneaker.description}</h3>
            <p className="sneaker-card--size">Size: {sneaker.size}</p>
            <p className="sneaker-card--brand">Brand: {sneaker.brand}</p>
            <p className="sneaker-card--ogprice">Original price: {sneaker.originalprice}</p>
            <p className="sneaker-card--box">In Box: {sneaker.box}</p>
            <p className="sneaker-card--condition">Condition: {sneaker.wear}</p>
            <input type="button" value="delete" onClick={(e) => removeSneaker(e)}/>
        </div>
    );
}

export default Sneaker;