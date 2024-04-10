import React from 'react'


const Contact2 = ({ contacts, handleDelete }) => {
  return (
    <>
    {/* <div>
      <h2>Contact Listsdc</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <p>Name: {contact.name}</p>
            <p>Email: {contact.email}</p>
            <p>Subject: {contact.subject}</p>
            <p>Website: {contact.website}</p>
            <p>Message: {contact.message}</p>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div> */}
    </>
  );
};

export default Contact2;
