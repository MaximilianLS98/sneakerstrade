import React from "react";
import Sneaker from "../components/Sneaker";
import shoeImg from "../assets/images/shoe.png";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import '../singleProduct.css';

const SingleProduct = () => {
    const { id } = useParams();
    const sneakers = useSelector(state => state.sneakers);

    const sneaker = sneakers.sneakers.find(sneaker => {
        return sneaker.id === parseInt(id, 10);
    });

    const navigate = useNavigate();
    
    return (
        <section className="singleproduct-container">
            <div className="left-column">
                <img src={shoeImg} alt={sneaker.name} />
            </div>
            <div className="right-column">
                <p className="brand">Brand: {sneaker.brand}</p>
                <div className="product-description">
                    <h1>{sneaker.title}</h1>
                    <p>{sneaker.description}</p>
                </div>
                <div className="product-details">
                    <p>Size: {sneaker.size}</p>
                    <p>Wear: {sneaker.wear}</p>
                    <p>In Box: {sneaker.box}</p>
                    <p>Owner: <Link to={`user/${sneaker.ownerid}`}>{sneaker.ownerid}</Link></p>
                </div>
                <div className="product-price">
                    <span>Original price: {sneaker.originalprice}</span>
                    <button className="back-button" onClick={() => navigate(-1)}>Back</button>
                </div>
            </div>
            
        </section>
    );
}

export default SingleProduct;