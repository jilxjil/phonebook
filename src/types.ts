export interface contact {
    id: String;
    firstName: String;
    lastName:String;
    phone: String;
    company:String
}

export interface ContactFormProps {
    onSave: (contact: contact) => void;
    editingContact?: contact | null;
  }