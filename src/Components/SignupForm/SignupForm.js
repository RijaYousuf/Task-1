import React from 'react'
import { useState } from 'react';
import './SignupForm.css'

const SignupForm = () => {

    var fullNameRE = /^[A-Za-z ]{2,20}$/i;
    var emailRE = /^[a-zA-Z0-9_.-]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    var passRE = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    var contactRE = /^\d{11}$/

    var [user, setUser] = useState({
        fullName: "",
        fullNameErr: "",
        password: "",
        passwordErr: "",
        email: "",
        emailErr: "",
        contact: "",
        contactErr: "",
      });

    var handleFormInput = (e) => {
        var {name, value} = e.target;
        setUser((prevState)=> ({
             ...prevState, [name]: value 
        }))
    }

    var userValidation = (re, check, err) => {
        if (!re.test(check)) {
          setUser((prevState) => {
            return { ...prevState, [err]: `Invalid Input` };
          });
          return false;
        } else {
          setUser((prevState) => {
            return {
              ...prevState,
              [err]: "",
            };
          });
          return true;
        }
      };

    
    var handleFormSubmit = (e) => {
        e.preventDefault();    
        if (
            userValidation(fullNameRE, user.fullName, "fullNameErr") 
            &&
            userValidation(passRE, user.password, "passwordErr") 
            &&
            userValidation(emailRE, user.email, "emailErr") 
            &&
            userValidation(contactRE, user.contact, "contactErr")
          ) {
            alert("form submitted");
          }
    }

    return (
        <div>
        <form onSubmit={handleFormSubmit}>
        <h1>SIGN UP</h1>
            <input type="text"
            name= "fullName"
            placeholder="Full Name"
            value = {user.fullName}
            onChange={(e) => handleFormInput(e)}
            className={user.fullNameErr ? "err" : null}
            />
            {user.fullNameErr ? (<p>{user.fullNameErr}</p>) : (null)}
             <input type="text"
            name= "email"
            placeholder="Email"
            value = {user.email}
            onChange={(e) => handleFormInput(e)}
            className={user.emailErr ? "err" : null}
            />
              {user.emailErr ? (<p>{user.emailErr}</p>) : (null)}
             <input type="text"
            name= "password"
            placeholder="Password"
            value = {user.password}
            onChange={(e) => handleFormInput(e)}
            className={user.passwordErr ? "err" : null}
            />
             {user.passwordErr ? (<p>{user.passwordErr}</p>) : (null)}
             <input type="text"
            name= "contact"
            placeholder="Contact"
            value = {user.contact}
            onChange={(e) => handleFormInput(e)}
            className={user.contactErr ? "err" : null}
            />
             {user.contactErr ? (<p>{user.contactErr}</p>) : (null)}
            <button type="submit" className="btn">Signup</button>
        </form>
    </div>
    )
}

export default SignupForm
