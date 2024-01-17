import { React, useState } from "react";
import "./contact.scss";
import Grid from "@mui/material/Grid";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const sendEmail = () => {
    let isValid = true;
    if (!fullName.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name can't be blank",
      }));
      isValid = false;
    }

    if (!email.trim() || !validateEmail(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address",
      }));
      isValid = false;
    }

    if (!phone.trim() || !validatePhone(phone)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Please enter a valid 10-digit phone number",
      }));
      isValid = false;
    }

    if (!subject.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        subject: "Subject can't be blank",
      }));
      isValid = false;
    }

    if (!message.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "Message can't be blank",
      }));
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "vikasyadhuvanshi@gmail.com",
      Password: "AE941B7120586F72510C26BE048D9031B6F0",
      To: "vikasyadhuvanshi@gmail.com",
      From: "vikasyadhuvanshi@gmail.com",
      Subject: `${subject}`,
      Body: `Send By: ${fullName} <br> Email: ${email} <br> Phone: ${phone} <br> Message: ${message}`,
    }).then((message) => {
      if (message === "OK") {
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent to Vikas!",
          icon: "success",
        });
        setFullName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      }
    });
  };

  const handleNameChange = (event) => {
    const inputValue = event.target.value;
    setFullName(inputValue);
    setNameError(inputValue.trim() === "");
  };

  const handlePhoneChange = (event) => {
    const inputValue = event.target.value;
    setPhone(inputValue);
    setPhoneError(!/^\d{10}$/.test(inputValue));
  };

  const handleEmailChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
    setEmailError(!/^\S+@\S+\.\S+$/.test(inputValue));
  };

  const handleSubjectChange = (event) => {
    const inputValue = event.target.value;
    setSubject(inputValue);
    setSubjectError(inputValue.trim() === "");
  };

  const handleMessageChange = (event) => {
    const inputValue = event.target.value;
    setMessage(inputValue);
    setMessageError(inputValue.trim() === "");
  };
  return (
    <div
      className="contact"
      style={{
        // background: "rgb(230, 230, 230)",
        // "linear-gradient(180deg, black, white)",
        background: "white",
      }}
    >
      <div className="body">
        <Grid container spacing={2}>
          <Grid className="leftGrid" item md={6}>
            <img src="/contact.svg" className="contactImg" alt="" />
          </Grid>
          <Grid className="rightGrid" item md={6}>
            <Grid item md={12} className="header">
              <h1 style={{ color: "black" }}>Get in Touch</h1>
            </Grid>
            <Grid className="contactForm" item md={12}>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="input-box">
                  <div className="input-field field">
                    <input
                      type="text"
                      placeholder="Full Name"
                      id="name"
                      className="item"
                      autoComplete="off"
                      value={fullName}
                      onChange={handleNameChange}
                    />
                    {nameError && (
                      <div className="error-txt">{errors.name}</div>
                    )}
                  </div>
                  <div className="input-field field">
                    <input
                      type="text"
                      placeholder="Email Address"
                      id="email"
                      className="item"
                      autoComplete="off"
                      value={email}
                      onChange={handleEmailChange}
                    />
                    {emailError && (
                      <div className="error-txt">{errors.email}</div>
                    )}
                  </div>
                </div>
                <div className="input-box">
                  <div className="input-field field">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      id="phone"
                      className="item"
                      autoComplete="off"
                      value={phone}
                      onChange={handlePhoneChange}
                    />
                    {phoneError && (
                      <div className="error-txt">{errors.phone}</div>
                    )}
                  </div>
                  <div className="input-field field">
                    <input
                      type="text"
                      placeholder="Subject"
                      id="subject"
                      className="item"
                      autoComplete="off"
                      value={subject}
                      onChange={handleSubjectChange}
                    />
                    {subjectError && (
                      <div className="error-txt">{errors.subject}</div>
                    )}
                  </div>
                </div>
                <div className="textarea-field field">
                  <textarea
                    name=""
                    id="textarea"
                    cols={76}
                    rows={10}
                    className="item"
                    placeholder="Your Message"
                    autoComplete="off"
                    value={message}
                    onChange={handleMessageChange}
                  />
                  {messageError && (
                    <div className="error-txt">{errors.message}</div>
                  )}

                  <div>
                    <button onClick={sendEmail}>Send</button>
                  </div>
                </div>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Contact;
