export const ContactItem = ({ contactItem, onClick }) => {
  return (
    <li>
      {contactItem.name}: {contactItem.number}
      <button type="button" onClick={onClick}>
        Delete
      </button>
    </li>
  );
};
