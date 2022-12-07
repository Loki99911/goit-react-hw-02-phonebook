export const ContactItem = ({ options, onLeaveFeedback }) => {
  return (
      {options.map(option => {
        return (<li>{ option}</li>);
      })}
  );
};
