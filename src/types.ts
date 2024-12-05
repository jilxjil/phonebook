export interface contact {
    id: number;
    firstName: string;
    lastName: string;
    company: string;
    phone: string;
  }

export interface ContactFormProps {
    onSave: (contact: contact) => void;
    editingContact?: contact | null;
  }

  export interface ContactCardProps {
    contact: contact;
    onDelete: (id: number) => void;
    onEdit: (contact: contact) => void;
  }

 