import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import InboxComponent from "../components/InboxComponent";
import { useAuth0 } from "@auth0/auth0-react";
import '../singleProduct.css';

const SingleProduct = () => {
    const { isAuthenticated } = useAuth0();
    const { id } = useParams();
    const sneakers = useSelector(state => state.sneakers);

    const sneaker = sneakers.sneakers.find(sneaker => {
        return sneaker.id === parseInt(id, 10);
    });
    const navigate = useNavigate();
    
    return (
        <>
        <section className="singleproduct-container">
            <div className="left-column">
                <img className="singleProduct-image" src={sneaker.imgurl} alt={sneaker.name} />
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
                    <p>Owner: <Link to={`user/${sneaker.owner || sneaker.ownerid}`}>{sneaker.owner || sneaker.ownerid}</Link></p>
                </div>
                <div className="product-price">
                    <span>Original price: {sneaker.originalprice}</span>
                    <button className="back-button" onClick={() => navigate(-1)}>Back</button>
                </div>
            </div>
        </section>
            {isAuthenticated && <InboxComponent className="inboxcomp" owner={sneaker.ownerid} name={sneaker.title}/>}
        </>
    );
}

export default SingleProduct;