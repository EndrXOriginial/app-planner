import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label for="name">Name</label>
      <input id="name" name="name" type="text" value={name} onChange={setName} required/>
      <label for="phone">Phone</label>
      <input id="phone" name="phone" type="text" value={phone} onChange={setPhone} pattern="\(\d{3}\) \d{3}-\d{4}" required/>
      <label for="email">Email</label>
      <input id="email" name="email" type="text" value={email} onChange={setEmail} required/>
      <button>Submit</button>
    </form>
  );
};

