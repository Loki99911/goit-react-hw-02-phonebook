export const ContactItem = ({ contactItem }) => {
  return (
    <li >
      {contactItem.name}: {contactItem.number}{' '}
    </li>
  );
};
