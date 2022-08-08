import axios from 'axios';
import React, { useState } from 'react';
import classes from './VerifyAccount.module.css';
import Spinner from '../../components/Spinner/spinner';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Reserved from '../../components/Reserved/Reserved';

const VerifyAccount = () => {
    const [document, setDocument] = useState("");
    const [select, setSelect] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const [selectDocument, setSelectDocument] = useState("");
    const [userMessage, setUserMessage] = useState(false);
    const [error, setError] = useState(false);

    const submitVerifyFormHandler = (event) => {
          event.preventDefault();
          setSpinner(true);
          if(selectDocument !== "") {
              const verifyAccount = {
                  dropDownDocument: selectDocument,
                  photoDocument: document
              }
                axios.post("/verifyAccount.json", verifyAccount)
                .then(response => {
                  setSpinner(false); 
                  setTimeout(() => {
                    setUserMessage(true);
                  }, 100);
                  setTimeout(() => {
                    setUserMessage(false);
                  }, 5000);
                })
                .catch((err) => {
                  setSpinner(true);
                  setError(true);
                });
        }
    }

    let Select =  <select onClick={() => setSelect(true)} 
    style={{
      backgroundColor: "#ccc",
      zIndex: "150",
      width: "30%",
      borderRadius: "1em",
      padding: "5px 0px"
    }}>
                     <option value="Select Document Type">Select Document Type</option>
                  </select>
    if(select) {
      Select = <div>
              <select onChange={(e) => setSelectDocument(e.target.value)} style={{
            backgroundColor: "#ccc",
            zIndex: "150",
            width: "30%",
            borderRadius: "1em",
            padding: "5px 0px"

        }}>
                  <option value="Select Document Type">Select Document Type</option>
                  <option value="Passport">Passport</option>
                  <option value="Driver's License">Driver's License</option>
                  <option value="Voter's Card">Voter's Card</option>
                  <option value="National ID Card">National ID Card</option>
               </select>
            </div>
    }


    return (
      <>
        <form style={{textAlign: "center", marginTop: "8em"}}
             onSubmit={submitVerifyFormHandler}>
          <div className={classes.container}>
              {spinner ? <Spinner /> : null }
              {userMessage ? <>
                  <AiOutlineCheckCircle style={{
                     fontSize: "4em", 
                     color: "green"
                     }} />
                 <p style={{color: "green", fontFamily: "fantasy" }}>Document Uploaded Successfully</p>
                 </> : null }
                 { error ? <p style={{color: "red"}}>Unable to get Connection</p> : null }
            <div 
              style={{
                  color: "#fff", 
                  marginTop: "8em", 
                  textAlign: "center",
                  padding: "20px 5px"
              }}
                 >Provide A Valid Means Of Identification
              </div>
              <hr />
              <p style={{color: "#fff", fontFamily: "Roman"}}>Fill in the form</p>
              <label style={{color: "#fff"}}>Document Name</label>
              <br />
            <div style={{marginBottom: "2.5em"}}>
              {Select}
            </div>
            <label htmlFor='myfile' 
                style={{
                   color: "#fff"
                }}>Document</label>
            <br />
          <div className={classes.fileContainer} >
            <div className={classes.file}>
                <input type='file' id='myfile' name='myfile'
                   onChange={(e) => setDocument(e.target.result)} />
            </div>
            </div>
            <button style={{marginTop: "1.5em", borderRadius: "25px"}} type="submit">Upload Document</button>
          </div>
        </form>
            <Reserved />
        </>
    );

};

export default VerifyAccount;