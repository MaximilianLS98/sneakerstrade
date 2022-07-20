import React, { useState, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { addSneaker } from "../features/sneakers/sneakerSlice";

const CreateSneaker = () => {

    const dispatch = useDispatch();

    const infoChange = (e) => {console.log(e.target.files[0])};

    const { user } = useAuth0();

    const [formValues, setFormValues] = useState(window.localStorage.getItem("formValues") ? JSON.parse(window.localStorage.getItem("formValues")) : {});
    const form = useRef();

    const getValues = () => {
        const values = {};
        for (let i = 0; i < form.current.elements.length; i++) {
            const element = form.current.elements[i];
            if (element.name) {
                values[element.name] = element.value;
            }
        }
        values.ownerid = user.email;
        return values;
    }

    const uploadImage = (path) => {
        fetch("http://localhost:3000/sneakers/image-upload", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    image: path
                    })
                })
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                }
                )
                .catch(err => console.log(err));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setFormValues(getValues());
        window.localStorage.setItem("formValues", JSON.stringify(getValues()));

        uploadImage(formValues.imagepath);

        fetch("http://localhost:3000/sneakers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(getValues(user))
        }).then(res => res.json())
        .then(res => { dispatch(addSneaker(res)); })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    
    // attempt to set up state with every change in the form fields
    // const handleChange = (e) => {
    //     setFormValues({ ...formValues, [e.target.name]: e.target.value });
    // }

    return (
        <div className="sneakerForm">
            <form action="" id="form" ref={form} onSubmit={(e) => submitHandler(e)} encType="multitype/form-data" >
                <input type="text" placeholder="Title" name="title" />
                <input type="text" placeholder="Description" name="description" />
                <select name="size" id="size">
                    <option value="32">32</option>
                    <option value="34">34</option>
                    <option value="36">36</option>
                    <option value="38">38</option>
                    <option value="40">40</option>
                    <option value="42">42</option>
                    <option value="44">44</option>
                    <option value="46">46</option>
                </select>
                <input type="text" placeholder="Brand" name="brand" />
                <input type="text" placeholder="Original Price" name="originalprice" />
                <label htmlFor="box">In Original Box</label>
                <input type="checkbox" name="box" id="box" />
                <select name="wear" id="wear">
                    <option value="unused">Unused</option>
                    <option value="worn">Worn</option>
                    <option value="destroyed">Destroyed</option>
                </select>
                <input type="text" placeholder="Color" name="color" />
                <input type="text" placeholder="Category" name="category" />
                <fieldset name="gender">
                    <label htmlFor="gender">Masculine</label>
                    <input type="radio" name="box" id="gender" value="masculine" />
                    <label htmlFor="box">Feminine</label>
                    <input type="radio" name="box" id="gender" value="feminine" />
                    <label htmlFor="box">Unisex</label>
                    <input type="radio" name="box" id="gender" value="unisex" />
                </fieldset>
                <input type="file" name="imagepath" accept="image/*" onChange={infoChange}/>
                <button type="submit">List Sneaker</button>
            </form>
        </div>
    );
}

export default CreateSneaker;