import React, { Component } from 'react';
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [showName, setShowName] = useState(false);
  const [email, setEmail] = useState("");
  const [showEamil, setShowEamil] = useState(false);
  const [address, setAddress] = useState("");
  const [showAddress, setShowAddress] = useState(false);
  const [address2, setAddress2] = useState("");
  const [showAddress2, setShowAddress2] = useState(false);
  const [city, setCity] = useState("");
  const [showCity, setShowCity] = useState(false);
  const [province, setProvince] = useState("");
  const [showProvince, setShowProvince] = useState(false);
  const [postCode, setPostCode] = useState("");
  const [showPostCode, setShowPostCode] = useState(false);

  
  const funcToHandleSubmit = (e) => {
    e.preventDefault();
   
    setShowName(true);
    setShowEamil(true);
    setShowAddress(true);
    setShowAddress2(true);
    setShowCity(true);
    setShowProvince(true);
    setShowPostCode(true);
    setShowName(true);
  };

  return(
    <>
      {/* form submitted to function named subnsnHandlerMethod*/}
      {/* form defination */}
  
      <form onSubmit={funcToHandleSubmit}>
        <h1>Data Entry Form</h1>
        <div className="first">
          {/* form fields */}
          <div>
            <label htmlFor="emailval">Email</label>
            {/* set state on change of value */}
            <input type="email" id="emailval" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <label htmlFor="nameVal">Name</label>
            <input type="text" id="nameVal" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        </div>
        <label htmlFor="addrval">Address</label>
        <input type="text" id="addrval" placeholder="1234 Main St" value={address} onChange={(e) => setAddress(e.target.value)} />
        <label htmlFor="AddressVal">Address 2</label>
        <input type="text" id="AddressVal" value={address2} onChange={(e) => setAddress2(e.target.value)} />
        <div className="second">
          <div>
            <label htmlFor="cityval">City</label>
            <input type="text" id="cityval" value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
          <div>
            <label htmlFor="pr" id="prlabel">
              Province
            </label>
            <select id="pr" value={province} onChange={(e) => setProvince(e.target.value)}>
              <option value="Alberta">Alberta</option>
              <option value="British Columbia">British Columbia</option>
              <option value=" Manhitoba">Manhitoba</option>
              <option value="New bornswick">New bornswick</option>
            </select>
          </div>
          <div>
            <label htmlFor="posval">Postal Code</label>
            <input type="text" id="posval" value={postCode} onChange={(e) => setPostCode(e.target.value)} />
          </div>
        </div>
        <input type="checkbox" /> Agree Terms &amp; Condition?
        {/* submit button */}
        <input type="submit" value="Submit" id="btn" />
      </form>

      {/* output div */}
      {/* show values on form submit */}

      <div className="opdiv">
        <div>{showName ? `Full name: ${name}` : ''}</div>
        <div>{showEamil && `Email: ${email}`}</div>
        <div>{showAddress && `Address: ${address}`}</div>
        <div>{showAddress2 && `Adddress 2: ${address2}`}</div>
        <div>{showCity && `City: ${city}`}</div>
        <div>{showProvince && `Province: ${province}`}</div>
        <div>{showPostCode && `Postal code: ${postCode}`}</div>
      </div>
    </>
  );
}
    


export default App;
