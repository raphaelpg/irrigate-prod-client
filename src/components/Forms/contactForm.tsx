import React, { useState } from 'react';
import { serverUrl } from '../../data/data'
import { IContact } from '../../interfaces/Contact';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<string>('');
  const initialFormState = {
    "name": "", 
    "email": "",
    "message": "",
  }

  const [newContact, setNewContact] = useState<IContact>(initialFormState);

  const clearContactState = () => {
    setNewContact(initialFormState);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewContact(prevNewContact => ({
      ...prevNewContact,
      [name]: value,
    }))
  }

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(serverUrl + '/message', {
      method: 'POST',
      body: JSON.stringify(newContact),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(result => {
      console.log("res: ", JSON.stringify(result, null, 2));
      clearContactState();
      setStatus('SUCCESS');
    })
    .catch(err => {
      console.log(err);
      setStatus('FAILED');
    })
  }

  return(
    <div className="contact-container">
      <div className="contact-title">
        <h2>Contact us</h2>
      </div> 
      <div className="contact-form-container">
        <form
          className="irrigateForm"
          method="post"
          onSubmit={sendMessage}
        >
          <label className="formLabel">Your name:
            <input 
              type="text" 
              name="name" 
              id="name" 
              onChange={handleChange}
              value={newContact.name}
              required
            />
          </label>
          <label className="formLabel">Your email:
            <input 
              type="email" 
              name="email" 
              id="email" 
              onChange={handleChange}
              value={newContact.email}
              required
            />
          </label>
          <label className="formLabel">Your message:
            <textarea 
              name="message" 
              id="message" 
              onChange={handleChange} 
              value={newContact.message}
              required
              />
          </label>
          {status === "SUCCESS" ? <button className="introduction-button irrigateFormButton">Thanks !</button> : <button className="introduction-button irrigateFormButton" type="submit">Send message</button>}
          {status === "ERROR" && <p>There was an error.</p>}
        </form>
      </div>
    </div>
  )
}

export default ContactForm;