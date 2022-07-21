import React from "react";
import Sneaker from "../components/Sneaker";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleProduct = () => {
    const { id } = useParams();
    const sneakers = useSelector(state => state.sneakers);

    const sneaker = sneakers.sneakers.find(sneaker => {
        return sneaker.id === parseInt(id, 10);
    });

    console.log(id, sneaker, 'some info');
    console.log(sneakers, 'sneakers');

    const navigate = useNavigate();
    
    return (
        <Sneaker key={sneaker.id} sneaker={sneaker} />
    );
}

export default SingleProduct;