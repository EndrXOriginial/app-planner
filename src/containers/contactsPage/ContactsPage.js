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
  const [double, setDouble] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

    if (!double) {
      props.changeContacts(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    } else if (double) {
      alert(`${name} already exists in the contact list`);
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  // Checks if the name already exists in the contact array sent through props
  useEffect(() => {
    setDouble(props.contacts.every(contact => 
      name !== contact.name
    ));
  }, [name]);

  console.log(double);

  const handleNameChange = (e) => {
    let nameValue = e.target.value;
    console.log(nameValue);
    setName(nameValue);
  }

  const handlePhoneChange = (e) => {
    let phoneValue = e.target.value;
    console.log(phoneValue);
    setPhone(phoneValue);
  }

  const handleEmailChange = (e) => {
    let emailValue = e.target.value;
    console.log(emailValue);
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
