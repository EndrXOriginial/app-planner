import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notDouble, setDouble] = useState(false);

  //Handles the submit of the form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (notDouble) {
      props.changeContacts(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
      console.log('it worked');
    } else if (!notDouble) {
      alert(`${name} already exists in the contact list`);
    }
  };

  const checkDouble = contactName => contactName.name !== name;

  // Checks if the name already exists in the contact array sent through props
  useEffect(() => {
    let isDoubled = props.contacts.every(checkDouble);
    setDouble(isDoubled);
  }, [name]);

  const handleNameChange = (e) => {
    let nameValue = e.target.value;
    setName(nameValue);
    
  }

  const handlePhoneChange = (e) => {
    let phoneValue = e.target.value;
    setPhone(phoneValue);
  }

  const handleEmailChange = (e) => {
    let emailValue = e.target.value;
    setEmail(emailValue);
  }

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm handleSubmit={handleSubmit} name={name} setName={handleNameChange} phone={phone} setPhone={handlePhoneChange} email={email} setEmail={handleEmailChange}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={props.contacts}/>
      </section>
    </div>
  );
};
