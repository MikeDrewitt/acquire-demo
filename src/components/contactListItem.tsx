import React from "react";

import { Contact } from "../types/contact.type";

type Props = { contact: Contact };

const ContactListItem = ({ contact }: Props) => (
  <div>
    <div>Name: {contact.name || "N/A"}</div>
    <div>Email: {contact.email || "N/A"}</div>
    <div>Phone: {contact.phone || "N/A"}</div>
  </div>
);

export default ContactListItem;
