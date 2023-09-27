import { useState, useEffect } from 'react';
import { validateEmail } from "../utils/Helpers";

export default function ContactPage() {

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userNameMessage, setUserNameMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [textMessage, setTextMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else if (inputType === 'message') {
      setTextMessage(inputValue);
    }
  };

  const handleOnBlurUserName = (e) => {
    if (!userName) {
      setUserNameMessage('Name is required');
      return
    }
    setUserNameMessage('');
    return;
  };

  const handleOnBlurEmail = (e) => {
    if (!validateEmail(email)) {
      setEmailMessage('Email is invalid');
      return
    }
    setEmailMessage('');
    return;
  };

  const handleOnBlurMessage = (e) => {

    if (!textMessage) {
      setTextMessage('A message is required');
      return
    }
    setTextMessage('');
    return;
  };

  return (
    <div className="contact-body">
      <h3 className="page-title">Contact Me </h3>
      <form action="" method="get" className="form-example">
        <div className="form-example">
          <label htmlFor="name">Name: </label><br />
          <input type="text" name="userName" value={userName} id="userName" size="36" onChange={handleInputChange} onBlur={handleOnBlurUserName}  />
        </div>
        <div className="form-example">
          <label htmlFor="email">Email Address: </label><br />
          <input type="email" name="email" value={email} id="email" size="36" onChange={handleInputChange} onBlur={handleOnBlurEmail}  />
        </div>
        <div className="form-example">
          <label htmlFor="message">Message: </label><br />
          <textarea name="textMessage" id="message" onChange={handleInputChange} onBlur={handleOnBlurMessage}/>
        </div>
        <div className="form-example">
          <input type="submit" value="Submit" />
        </div>
      </form>
      {userNameMessage && (
        <div>
          <p className="error-text">{userNameMessage}</p>
        </div>
      )}

      {emailMessage && (
        <div>
          <p className="error-text">{emailMessage}</p>
        </div>
      )}

      {textMessage && (
        <div>
          <p className="error-text">{textMessage}</p>
        </div>
      )}
    </div>
  );
}
