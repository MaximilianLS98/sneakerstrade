import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { addSneaker } from "../features/sneakers/sneakerSlice";
import { WidgetLoader, Widget } from "react-cloudinary-upload-widget";

const CreateSneaker = () => {
    const [url, setUrl] = useState("");

    
    const successCallBack = (e) => {
        console.log(e, "this is callback");
        console.log(e.info.secure_url, "this is secure url");
        const secureUrl = e.info.secure_url;
        setUrl(secureUrl);
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const infoChange = (e) => {console.log(e.target.files[0])};

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
        values.owner = user.nickname;
        values.ownerid = user.email;
        values.imgurl = url
        return values;
    }

    const uploadImage = (path) => {
        fetch("https://sneakerspot-server.herokuapp.com/sneakers/image-upload", {
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

    // refactor when time
    const submitHandler = (e) => {
        e.preventDefault();
        setFormValues(getValues());
        window.localStorage.setItem("formValues", JSON.stringify(getValues()));

        uploadImage(formValues.imagepath);

        fetch("https://sneakerspot-server.herokuapp.com/sneakers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(getValues(user))
        }).then(res => res.json())
        .then(res => { dispatch(addSneaker(res)); })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        navigate("/");
    }

    return (
        <>
        <h1>Create Sneaker</h1>
        <div className="form-style-5">
            <form className="sneakerForm-container" action="" id="form" ref={form} onSubmit={(e) => submitHandler(e)} encType="multitype/form-data" >
                <div className="sneakerForm--tandd">
                    <input type="text" placeholder="Title" name="title" />
                    <input type="text" placeholder="Description" name="description" />
                </div>
                <label>Size</label>
                <select name="size" id="size">
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
                <label>Brand</label>
                <select name="brand" id="brand">
                    <option value="Nike">Nike</option>
                    <option value="Adidas">Adidas</option>
                    <option value="Converse">Converse</option>
                    <option value="Reebok">Reebok</option>
                    <option value="Vans">Vans</option>
                    <option value="Puma">Puma</option>
                    <option value="Yeezy">Yeezy</option>
                    <option value="New Balance">New Balance</option>
                    <option value="Others">Others</option>
                </select>
                <input type="text" placeholder="Original Price" name="originalprice" />
                <select name="wear" id="wear">
                    <option value="unused">Unused</option>
                    <option value="worn">Worn</option>
                    <option value="destroyed">Destroyed</option>
                </select>
                <input type="text" placeholder="Color" name="color" />
                <input type="text" placeholder="Category" name="category" />
                {/* <fieldset name="gender">
                    <label>Masculine
                    <input type="radio" name="gender" id="masc" value="masculine" />
                    </label>
                    <label>Feminine
                    <input type="radio" name="gender" id="fem" value="feminine" />
                    </label>
                    <label>Unisex
                    <input type="radio" name="gender" id="uni" value="unisex" />
                    </label>
                </fieldset> */}
                <WidgetLoader />
                <Widget 
                    cloudName={"durevqv22"}
                    uploadPreset={"sneaker-images"}
                    multiple={false}
                    buttonText={"Upload Image"}
                    sources={["local", "url", "camera"]}
                    resourceType={"image"}
                    folder={"sneakers"}
                    cropping={false}
                    loggin={true}
                    use_fileName={false}
                    destroy={true}
                    background_removal={"cloudinary_ai"}
                    onSuccess={successCallBack}
                    widgetStyles={{
                        palette: {
                          window: '#737373',
                          windowBorder: '#FFFFFF',
                          tabIcon: '#FF9600',
                          menuIcons: '#D7D7D8',
                          textDark: '#DEDEDE',
                          textLight: '#FFFFFF',
                          link: '#0078FF',
                          action: '#FF620C',
                          inactiveTabIcon: '#B3B3B3',
                          error: '#F44235',
                          inProgress: '#0078FF',
                          complete: '#20B832',
                          sourceBg: '#909090'
                        },
                        fonts: {
                          default: null,
                          "'Fira Sans', sans-serif": {
                            url: 'https://fonts.googleapis.com/css?family=Fira+Sans',
                            active: true
                          }
                        }
                      }}
                      ></Widget>
                      <input readOnly="readonly" type="text" name="imgurl" id="imgurl" value={url ? 'Image Saved' : 'Upload image'}></input>
                <button type="submit">List Sneaker</button>
            </form>
        </div>
        </>
    );
}

export default CreateSneaker;