import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import classes from './contact.module.css';
import Spinner from '../Spinner/spinner';
import { SiBitcoinsv } from 'react-icons/si';
import Earn from '../../container/Earn/Earn';
import Reserved from '../Reserved/Reserved';

const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [textArea, setTextArea] = useState("");
    const [spinner, setSpinner] = useState(false);
    const [posted, setPosted] = useState(false);
    const [btc, setBtc] = useState(false);
    const inputElement = useRef();

    useEffect(() => {
        inputElement.current.focus();
    })

    const nameChangeHandler = e => setName(e.target.value);

    const emailChangeHandler = e => setEmail(e.target.value); 

    const submitContactDetails = (e) => {
        e.preventDefault();
        setBtc(true);
        setSpinner( true );
        const contact = {
            Name: name,
            Email: email,
            textAreaMessage: textArea
        };
        axios.post("/contactDetails.json", contact)
        .then(response => {
            setSpinner(false);
            setBtc(false);
            setPosted(true);
            console.log("response data", response.data)
            console.log("response", response)
            setTimeout(() => setPosted(false), 3000);
        })
        .catch(() => {
            setBtc(true);
            setSpinner(true);
        })
    }

    return (
        <header className={classes.contact}>
            <div className={classes.contactUs}>CONTACT US</div>
            { btc ? <SiBitcoinsv  style={{fontSize:"10em", color: "green"}} /> : null }
            { spinner ? <Spinner /> : null }
            { posted ? <div style={{color: "green", textAlign: "center"}}>SUCCESS</div> : null }
            <div style={{fontFamily: "fantasy"}}>Contact us today! Please do not hesitate to ask us anything. 
            We will respond to your request within 24hrs.</div>
            <div className={classes.message}>DROP US A MESSAGE</div>
        <form onSubmit={submitContactDetails} >
            <div className={classes.contactInput}>
                <input ref={inputElement} type='text' placeholder='FULL NAME' className={classes.inputs}
                  onChange={nameChangeHandler} />
                <input type='email' placeholder="EMAIL" required className={classes.inputs}
                  onChange={emailChangeHandler} />
            </div>
            Message
            <br />
            <textarea style={{display: "inline"}} 
                  onChange={(e) => setTextArea(e.target.value) }
                />
            <br />
            <button style={{marginBottom: "5px", display: "inline-flex", cursor: "pointer", 
              justifyContent: "center"}} type='Reset'>Reset</button>
            <div>
                <button className={classes.button1} type='submit'>SEND MESSAGE</button>
            </div>
            <br />
        </form>
          <Earn />
          <Reserved />
        </header>
);
    };

export default ContactUs;