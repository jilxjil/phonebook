import React from "react";
import ContactCard from "./contactCard";
import { contact } from "@/types";

interface ContactListProps {
  contacts: contact[];
  onDelete: (id: number) => void;
  onEdit: (contact: contact) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, onDelete, onEdit }) => {
  return (
    <div className="space-y-2">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default ContactList;
