import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [appointments, setAppointments] = useState([]);
 const [contacts, setContacts] = useState([{name:'Chris', phone: '1234', email: 'chrischris@'}, {name: 'Serene', phone: '5678', email: 'sereneAlsaed@'}]);

//  console.log(`App contacts: ${contacts[0].name}`);

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const changeAppoint = (appoint) => {
    setAppointments(prev => {
      return [
        ...prev,
        {name: appoint.name,
        contact: appoint.contact,
        date: appoint.date,
        time: appoint.time}
      ]
    })
  };

  const changeContact = (name, phone, email) => {
    setContacts(prev => {
      return [
        ...prev,
        {name: name,
        phone: phone,
        email: email}
      ]
    })
  };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} changeContact={changeContact} /> /* Add props to ContactsPage */ } />
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} changeAppoint={changeAppoint} /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
