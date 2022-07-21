import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import shoeImg from "../assets/images/shoe.png";
import { updateSneaker } from "../features/sneakers/sneakerSlice";

const EditSneaker = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
        fetch(`http://localhost:3000/sneakers/${sneaker.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formValue)
        }).then(res => res.json())
        .then(res => { dispatch(updateSneaker(res)); })
            .catch(err => console.log(err));
            navigate("/");

    }

    return (
        <form onSubmit={(e) => submitHandler(e)}>
        <div className="sneaker-card2">
        <img className="sneaker-card--img2" src={shoeImg} alt="shoe" />
        <label>Title
        <input className="sneaker-card22 input2" type="text" value={formValue.title} name='title' onChange={handleChange} />
        </label>
        <label>Description
        <input className="sneaker-card22" type="text" value={formValue.description} name='description' onChange={handleChange} />
        </label>
        <label>Brand
        <input className="sneaker-card22" type="text" value={formValue.brand} name='brand' onChange={handleChange} />
        </label>
        <label>Original Price 
        <input className="sneaker-card22" type="text" value={formValue.originalprice} name='originalprice' onChange={handleChange} />
        </label>
        <label>In Box
        <input className="sneaker-card22" type="checkbox" value={formValue.box} name='box' onChange={handleChange}/>
        </label>
        <div className="sneaker-card22">
        <label>Condition
            <select className="sneaker-card--condition2" name="wear" id="wear" onChange={handleChange}>
                    <option value="unused">Unused</option>
                    <option value="worn">Worn</option>
                    <option value="destroyed">Destroyed</option>
            </select>
            </label>
        </div>
        <label>Size</label>
                <select className="sneaker-card--size2" value={formValue.size} onChange={handleChange} name="size" id="size">
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
        <button className="sneaker-card--save" type="submit">Save</button>
    </div>
    </form>
    )
}

export default EditSneaker;