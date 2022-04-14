import React, { useState } from 'react';
//import { validateEmail } from '../../utils/helpers';
import contactPic from "../../assets/images/contact.png";
import emailIcon from '../../assets/icons/mail.png';
import phoneIcon from '../../assets/icons/smartphone.png';

function ContactForm() {

  // const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  // const [errorMessage, setErrorMessage] = useState('');
  // const { name, email, message } = formState;

  // function handleChange(e) {

  //   if (e.target.name === 'email') {
  //     const isValid = validateEmail(e.target.value);

  //     if (!isValid) {
  //       setErrorMessage('Your email is invalid.');
  //     } else {
  //       setErrorMessage('');
  //     }
  //   } else {
  //     if (!e.target.value.length) {
  //       setErrorMessage(`A ${e.target.name} is required.`);
  //     } else {
  //       setErrorMessage('');
  //     }
  //   }

  //   if (!errorMessage) {
  //     setFormState({ ...formState, [e.target.name]: e.target.value });
  //   }
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  // }

  return (
    <section className='contact-container flex-grow bg-purple-900/40 pb-2'>
      <h1 className='contact-header text-indigo-200/70 underline underline-offset-8 pb-12 pt-2 text-center text-4xl'>Contact Me</h1>
      <div className='flex items-center md:justify-around flex-col md:flex-row'>
        <div>
          <img src={contactPic} className="p-12" alt="coffee mug next to laptop keyboard with sticky note saying Contact me" />
        </div>
        <div className='bg-indigo-300/40 rounded px-10 my-10 md:py-10'>
          <div className='flex flex-row items-center pr-20 py-10 w-72'>
            <img
              src={emailIcon}
              alt="email icon"
              width="48px"
              height="48px"
            />
            <a href='mailto: kerbunker@gmail.com' className='px-2 text-indigo-300 text-xl hover:text-2xl'>kerbunker@gmail.com</a>
          </div>
          <div className='flex flex-row items-center pr-20 py-10'>
          <img
              src={phoneIcon}
              alt="smartphone icon"
              width="48px"
              height="48px"
            />
            <p className='px-2 text-indigo-300 text-xl'>315-335-8393</p>
          </div>
        </div>
        {/* <div>
          <form id='contact-form' onSubmit={handleSubmit} className="contact-form">
            <div className='form-div'>
              <label htmlFor="name" className='form-label'>Name:</label>
              <br />
              <input className="form-input" type="text" defaultValue={name} onBlur={handleChange} name="name" />
            </div>
            <div className='form-div'>
              <label htmlFor="email" className='form-label'>Email address:</label>
              <br />
              <input className="form-input" type="email" name="email" defaultValue={email} onBlur={handleChange} />
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
        </div> */}
      </div>
    </section>
  )
}

export default ContactForm;