import React from "react";

export const ContactPicker = ({name, value, contacts, onChange}) => {
  return (
    <>
      <select onChange={onChange} value={value} name={name}>
        <option value="">No Contact Selected</option>

        {contacts.map((contact) => {
          return <option value={contact.name} key={contact.name}>{contact.name}</option>
        })}
      </select>
    </>
  );
};
