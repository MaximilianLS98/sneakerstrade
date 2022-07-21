import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import shoeImg from "../assets/images/shoe.png";

const EditSneaker = () => {
    const { id } = useParams();
    const sneakers = useSelector(state => state.sneakers);
    const sneaker = sneakers.sneakers.find(sneaker => {
        return sneaker.id === parseInt(id, 10);
    });
    const [formValue, setFormValue] = useState({
        title: `${sneaker.title}`,
        description: `${sneaker.description}`,
        size: `${sneaker.size}`,
        brand: `${sneaker.brand}`,
        originalprice: `${sneaker.originalprice}`,
        box: `${sneaker.box}`,
        wear: `${sneaker.wear}`
    });

    const handleChange  = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formValue);
        fetch(`http://localhost:3000/sneakers/${sneaker.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formValue)
        }).then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <form onSubmit={(e) => submitHandler(e)}>
        <div className="sneaker-card">
        <img className="sneaker-card--img" src={shoeImg} alt="shoe" />
        <input className="sneaker-card--title" type="text" value={formValue.title} name='title' onChange={handleChange} />
        <input className="sneaker-card--description" type="text" value={formValue.description} name='description' onChange={handleChange} />
        <label>Size</label>
                <select className="sneaker-card--size" value={formValue.size} onChange={handleChange} name="size" id="size">
                    <option value="32">32</option>
                    <option value="33">33</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                    <option value="46">46</option>
                    <option value="46">47</option>
                    <option value="46">48</option>
                </select>
        <input className="sneaker-card--brand" type="text" value={formValue.brand} name='brand' onChange={handleChange} />
        <input className="sneaker-card--ogprice" type="text" value={formValue.originalprice} name='originalprice' onChange={handleChange} />
        <p className="sneaker-card--id">ID: {sneaker.id}</p>
        <div className="sneaker-card--conditon-info">
            <input className="sneaker-card--box" type="checkbox" value={formValue.box} name='box' onChange={handleChange}/>
            <select className="sneaker-card--condition" name="wear" id="wear" onChange={handleChange}>
                    <option value="unused">Unused</option>
                    <option value="worn">Worn</option>
                    <option value="destroyed">Destroyed</option>
            </select>
        </div>
        <button className="sneaker-card--save" type="submit">Save</button>
    </div>
    </form>
    )
}

export default EditSneaker;