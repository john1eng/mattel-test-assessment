import { getByPlaceholderText } from "@testing-library/react";
import React from "react";
import { useState, useRef } from "react";
import { submitApi } from "../api/submitApi";
import { useHistory } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formContainer: {
    marginTop: "80px",
    width: "500px",
    // backgroundColor: "#FFB344",
  },
  form: {
    padding: "40px",
    display: 'flex',
    flexDirection: 'column'
  },
  fieldContainer: {
    display: "flex",
    marginBottom: '15px',
  },
  label: {
    // fontWeight: 'bold',
    flex: 2,
  },
  input: {
    flex: 3,
    height: '20px',
    borderRadius: '2px',
    border: 'none',
    // backgroundColor:'#FFF8E5'
  },
  inputTextArea: {
    flex: 3,
    height: '100px',
    borderRadius: '2px',
    border: 'none',
    // backgroundColor:'#FFF8E5'
  },
  buttonContainer: {
    alignSelf: 'center',
    marginTop: '15px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#E05D5D',
    color: '#FFF8E5',
    fontSize: '20px',
    border: 'none',
    cursor: 'pointer'
  }
};

function SubmitRequestPage(props) {
  const firstInputRef = useRef();
  const lastInputRef = useRef();
  const contactInputRef = useRef();
  const emailInputRef = useRef();
  const addressInputRef = useRef();
  const businessInputRef = useRef();

  let history = useHistory(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    const first = firstInputRef.current.value
    const last = lastInputRef.current.value
    const contact = contactInputRef.current.value
    const email = emailInputRef.current.value
    const address = addressInputRef.current.value
    const business = businessInputRef.current.value
    submitApi({first, last, contact, email, address, business})
    history.push("/home");
  }

  return (
    <div style={styles.container}>
      <h1>Submit A Request</h1>
      <div style={styles.formContainer}>
        <form style={styles.form}>
          <div style={styles.fieldContainer}>
            <label style={styles.label} htmlFor="first-name">
              First Name
            </label>
            <input
              style={styles.input}
              type="text"
              id="first-name"
              required
              ref={firstInputRef}
            />
          </div>
          <div style={styles.fieldContainer}>
            <label style={styles.label} htmlFor="last-name">
              Last Name
            </label>
            <input
              style={styles.input}
              type="text"
              id="last-name"
              required
              ref={lastInputRef}
            />
          </div>
          <div style={styles.fieldContainer}>
            <label style={styles.label} htmlFor="contact-number">
              Contact Number
            </label>
            <input
              style={styles.input}
              type="text"
              id="contact-number"
              required
              ref={contactInputRef}
            />
          </div>
          <div style={styles.fieldContainer}>
            <label style={styles.label} htmlFor="email-id">
              Email Id
            </label>
            <input
              style={styles.input}
              type="email"
              id="email-id"
              required
              ref={emailInputRef}
            />
          </div>
          <div style={styles.fieldContainer}>
            <label style={styles.label} htmlFor="address">
              Address
            </label>
            <input
              style={styles.input}
              type="text"
              id="address"
              required
              ref={addressInputRef}
            />
          </div>
          <div style={styles.fieldContainer}>
            <label style={styles.label} htmlFor="business-justification">
              Business Justification
            </label>
            <textarea
              style={styles.inputTextArea}
              type="text"
              id="business-justification"
              required
              ref={businessInputRef}
            />
          </div>
          <div style={styles.buttonContainer}>
            <button style={styles.button} type="button" onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SubmitRequestPage;
