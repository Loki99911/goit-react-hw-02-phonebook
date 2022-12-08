// import PropTypes from 'prop-types';
import { ItemBlock, ItemBtn } from './ContactItem.styled';

export const ContactItem = ({ contactItem, onClick }) => {
  return (
    <ItemBlock>
      {contactItem.name}: {contactItem.number}
      <ItemBtn type="button" onClick={onClick}>
        Delete
      </ItemBtn>
    </ItemBlock>
  );
};
