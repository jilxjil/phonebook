import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { contact } from "@/types";
import { Button } from "./ui/button";

interface ContactCardProps {
  contact: contact;
  onDelete: (id: number) => void;
  onEdit: (contact: contact) => void;
}

const getInitials = (firstName: string, lastName: string) => {
  const firstInitial = firstName ? firstName[0].toUpperCase() : "";
  const lastInitial = lastName ? lastName[0].toUpperCase() : "";
  return firstInitial + lastInitial || "XX";
};

const ContactCard: React.FC<ContactCardProps> = ({ contact, onDelete, onEdit }) => {
  return (
    <div className="grid grid-cols-2  items-center w-full px-2 py-2 hover:cursor-pointer hover:bg-primary rounded-2xl bg-primary text-foreground border border-foreground">
      <div className="flex items-center">
        <Avatar>
          <AvatarImage
            src={ "https://github.com/shadcn.pn"}
            alt={contact.firstName}
          />
          <AvatarFallback>{getInitials(contact.firstName, contact.lastName)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col px-3 font-light">
          <div>{`${contact.firstName} ${contact.lastName}` || "John Doe"}</div>
          <div>{contact.company}</div>
        </div>
      </div>
     <div className="flex space-y-3 items-center justify-end ">
      <a className="text-secondary text-center">{contact.phone}</a>
      <div className=" flex md:flex-row flex-col md:space-x-2 md:space-y-0 space-y-1 items-center mx-5 ">
         <Button onClick={() => onEdit(contact)} className="hover:bg-primary hover:text-secondary hover:border-secondary bg-secondary text-background w-20 px-2 py-1 space-y-1 rounded-md shadow-md">
           Edit
         </Button>
         <Button onClick={() => onDelete(contact.id)} className="hover:bg-primary hover:text-secondary hover:border-secondary bg-secondary text-background w-20 px-2 py-1 space-y-1rounded-md shadow-md">

           Delete
         </Button>
      
      </div>
      </div> 
    </div>
  );
};

export default ContactCard;
