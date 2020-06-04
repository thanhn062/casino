import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./style.css";

function Register() {
  const [name, setName] = useState(""); 
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className='div'>
      <form className="Register" onSubmit={handleSubmit}>
        <div className='input-Name'>
            <FormGroup controlId="name" bsSize="large">
            <FormLabel>Name</FormLabel>
            <FormControl autoFocus type="text" value={name} onChange={e => setName(e.target.value)}/>
            </FormGroup>
        </div>

        <div className='input-Lastname'>
        <FormGroup controlId="lastname" bsSize="large">
            <FormLabel>Last Name</FormLabel>
            <FormControl autoFocus type="text" value={lastname} onChange={e => setLastName(e.target.value)}/>
            </FormGroup>
        </div>

        <div className='input-Email'>
            <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email</FormLabel>
            <FormControl autoFocus type="email" value={email} onChange={e => setEmail(e.target.value)}/>
            </FormGroup>
        </div>
        
        <div className='input-Password'>  
            <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl value={password} onChange={e => setPassword(e.target.value)} type="password"/>
             </FormGroup>
        </div>
      
        <div className='submit-Create-Btn'>
            <Button block bsSize="large" disabled={!validateForm()} type="submit">
                 Create
            </Button>
        </div>
       
      </form>
    </div>
  );
}

export default Register;