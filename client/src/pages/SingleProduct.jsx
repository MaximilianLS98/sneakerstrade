import React from "react";
import Sneaker from "../components/Sneaker";
import shoeImg from "../assets/images/shoe.png";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleProduct = () => {
    const { id } = useParams();
    const sneakers = useSelector(state => state.sneakers);

    const sneaker = sneakers.sneakers.find(sneaker => {
        return sneaker.id === parseInt(id, 10);
    });

    const navigate = useNavigate();
    
    return (
        <section className="single-product">
            <img src={shoeImg} alt={sneaker.name} />
            <h1>{sneaker.title}</h1>
            <p>{sneaker.description}</p>
            <p>Size: {sneaker.size}</p>
            <p>Brand: {sneaker.brand}</p>
            <p>Original price: {sneaker.originalprice}</p>
            <p>Wear: {sneaker.wear}</p>
            <p>In Box: {sneaker.box}</p>
            <p>Owner: {sneaker.ownerid}</p>
            <button onClick={() => navigate(-1)}>Back</button>

            <Sneaker key={sneaker.id} sneaker={sneaker} />
        </section>
    );
}

export default SingleProduct;