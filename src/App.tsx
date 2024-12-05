import React, { useState } from "react";
import Header from "./components/Header";
import ContactList from "./components/contactList";
import { contact } from "@/types";
import ContactForm from "./components/contactForm";
import { HiOutlinePlus } from "react-icons/hi2";

const App: React.FC = () => {
  const [contacts, setContacts] = useState<contact[]>([
    { id: 1, firstName: "John", lastName: "Doe", company: "Tech Co.", phone: "123-456-7890" },
    { id: 2, firstName: "Jane", lastName: "Smith", company: "Innovate Ltd.", phone: "098-765-4321" },
  ]);
  const [editingContact, setEditingContact] = useState<contact | null>(null);
  const [isEditingContact, setIsEditingContact] = useState(false)
  const [addContact, setAddContact]=useState(false)
  const deleteContact = (id: number) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };
  const handleSave = (contact:contact) =>{
    if(isEditingContact){
      setContacts((prev)=>
      prev.map((c) =>(c.id === contact.id ? contact:c))
    );
    } else {
      setContacts((prev)=> [...prev, contact]);
    }
    setIsEditingContact(false);
    setEditingContact(null);
    setAddContact(false);

   }


  return (
    <div className="w-screen h-screen items-center flex flex-col">
       <div className=" md:w-full flex justify-between  md:p-10 p-5 w-fit ">
    <h1 className="" >Phone book</h1>
    <div className="w-1/2 flex justify-center items-center md:space-x-3 ">
    <input type="text" name="search bar" placeholder="Search"  className=" w-4/6 rounded-full border-2  p-2 bg-background border-gray-500"/>
    <HiOutlinePlus className="size-11 " onClick={()=>{setAddContact(true)}  }/>
    </div>
    </div>
      <div className="md:w-3/5 w-3/4 h-full p-5 bg-primary rounded-sm shadow">
        <ContactList contacts={contacts} onDelete={deleteContact} onEdit={(contact)=>{
          setEditingContact(contact)
          setIsEditingContact(true)
        }} />
       {addContact && <ContactForm onSave={handleSave} editingContact={null} />}
        {isEditingContact && <ContactForm onSave={handleSave} editingContact={editingContact} />}

      </div>
    </div>
  );
};

export default App;
