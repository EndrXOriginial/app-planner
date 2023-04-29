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
 const [appointment, setAppointment] = useState([]);
 const [contact, setContact] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const changeAppoint = (appoint) => {
    setAppointment(prev => {
      return [
        ...prev,
        {name: appoint.name,
        contact: appoint.contact,
        date: appoint.date,
        time: appoint.time}
      ]
    })
  };

  const changeContact = (contactProp) => {
    setContact(prev => {
      return [
        ...prev,
        {name: contactProp.name,
        contact: contactProp.phone,
        date: contactProp.email}
      ]
    })
  };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contact={contact} changeContact={changeContact} /> /* Add props to ContactsPage */ } />
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointment={appointment} changeAppoint={changeAppoint} /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
