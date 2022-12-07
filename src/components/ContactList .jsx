import { ContactItem } from './ContactItem';


export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return <ContactItem contactItem={contact} key={contact.id} />;
      })}
    </ul>
  );
};
