import { ContactItem } from './ContactItem';


export const ContactList = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map(contact => {
        const { id } = contact
        return (
          <ContactItem
            key={id}
            contactItem={contact}
            onClick={()=>onClick(id)}
          />
        );
      })}
    </ul>
  );
};
