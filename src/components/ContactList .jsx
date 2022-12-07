import { ContactItem } from './ContactItem';

export const ContactList = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(option => {
        <ContactItem />;
      })}
    </ul>
  );
};
