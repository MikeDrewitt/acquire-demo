import React, { useState, useEffect } from "react";

import { Contact } from "../types/contact.type";

import ContactService from "../services/contact.service";

import ContactListItem from "../components/contactListItem";

const ContactPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [contacts, setContacts] = useState(new Array<Contact>());

  useEffect(() => {
    ContactService.list()
      .then(setContacts)
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading Page</div>; // make some loading overlay component
  if (error) return <div>Some Error has occured</div>; // make some error component

  return (
    <div>
      <h1>Contacts</h1>
      <div>
        {contacts.map((contact, index) => (
          <ContactListItem contact={contact} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
