import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  function handleChange(e) {

    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);

      if(!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`A ${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className='contact-container'>
      <h1 className='contact-header'>Contact Me</h1>
      <form id='contact-form' onSubmit={handleSubmit} className="contact-form">
        <div className='form-div'>
          <label htmlFor="name" className='form-label'>Name:</label>
          <br />
          <input className="form-input" type="text" defaultValue={name} onBlur={handleChange} name="name" />
        </div>
        <div className='form-div'>
          <label htmlFor="email" className='form-label'>Email address:</label>
          <br />
          <input className="form-input" type="email" name="email" defaultValue={email} onBlur={handleChange}  />
        </div>
        <div className='form-div'>
          <label htmlFor="message" className='form-label'>Message:</label>
          <br />
          <textarea className="form-input" name="message" defaultValue={message} onBlur={handleChange} rows="5" />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" className='button'>Submit</button>
      </form>
    </section>
  )
}

export default ContactForm;