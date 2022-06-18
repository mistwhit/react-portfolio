import React, { useState } from "react";
import validateEmail from "../../utils/validate Email";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(e) {

    console.log(`I am now targeting ${e.target.name}`)

    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("You must enter a valid email");
      } else {
        setErrorMessage("");
      }
    } 

    else {
      if (!e.target.value.length) {
        setErrorMessage(`You must enter a ${e.target.name}`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="container">
      <div className="row d-flex">
        <div className="col-md-5 mr-auto">
      <h2>Get In Touch</h2>
        <p className="mb-5">Send me an email or fill out this handy contact form. Can't wait to hear from you!</p>
          <span className="mr-3">
            <span className="fas fa-envelope"></span>
            <a href="mailto:mistywhitenton@gmail.com" className="contact-link">mistywhitenton@gmail.com</a>
            </span>
      </div>


      <div className="col-md-6">
      <form className="mb-5" id="form-contact" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-12 form-group">
       <p></p> 
      <div>
       <label for="name" className="col-form-label label">Name</label>
       </div>
        <input
          type="text"
          name="name"
          defaultValue={name}
          onBlur={handleChange}
        ></input>
        </div>
        </div>
        <div className="row">
          <div className="col-md-12 form-group">
            <div>
        <label for="email" className="col-form-label label">Email</label>
        </div>
        <input
          type="email"
          name="email"
          defaultValue={email}
          onBlur={handleChange}
        ></input>
        </div>
        </div>
        <div className="row">
          <div className="col-md-12 form-group">
            <div>
        <label for="message" className="col-form-label label">Message</label>
        </div>
        <textarea
          type="text"
          name="message"
          cols="30"
          rows="7"
          defaultValue={message}
          onBlur={handleChange}
        ></textarea>
        </div>
        </div>
        <div className="row">
          <div className="col-md-12">
        <button type="submit">Submit</button>
        </div>
        </div>

{/* Display error message if the user does not enter a name or an email correctly/handleChange function finds something false */}
        <div>
          {errorMessage && (
            <div>
              <h3>{errorMessage}</h3>
            </div>
          )}
        </div>
      </form>

      </div>

      </div>

    </div>
  );
};

export default Contact;