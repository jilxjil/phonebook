import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input'; // Use if needed, or replace with native input
import { Button } from './ui/button'; // Use if needed
import { contact } from "@/types";


interface ContactFormProps {
  onSave: (contact: contact) => void;
  editingContact?: contact | null;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSave, editingContact }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  

  useEffect(() => {
    if (editingContact) {
      setFirstName(editingContact.firstName);
      setLastName(editingContact.lastName);
      setCompany(editingContact.company);
      setPhone(editingContact.phone);
    } else {
      setFirstName('');
      setLastName('');
      setCompany('');
      setPhone('');
    }
  }, [editingContact]);

   



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!firstName || !lastName || !phone || !company) {
      return alert('All fields are required');
    }
    onSave({
      id: editingContact?.id || Date.now(),
      firstName,
      lastName,
      company,
      phone,
    });
    
  };


  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h1 className="text-lg font-bold mb-4">
        {editingContact ? 'Update Contact' : 'Add Contact'}
      </h1>
      <Input
        placeholder="John"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="mb-2 w-full"
      />
      <Input
        placeholder="Doe"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="mb-2 w-full"
      />
      <Input
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="mb-2 w-full"
      />
      <Input
        placeholder="0501010100"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="mb-2 w-full"
      />
      <Button type="submit" className="bg-blue-500 text-white">
        {editingContact ? 'Update Contact' : 'Add Contact'}
      </Button>
    </form>
  );
};

export default ContactForm;
