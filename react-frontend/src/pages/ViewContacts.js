import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ViewContacts = () => {
    const navigate = useNavigate();
    const [contacts, setContacts] = useState([]);

    const getContacts = async () => {
        const res = await fetch("http://localhost:4001/api/contact/get_contact");
        const data = await res.json();
        return data;
    };

    //Get contacts
    useEffect(() => {
        const getData = async () => {
          const contactsFromServer = await getContacts();
          setContacts(contactsFromServer)
        };
        getData();
    }, []);

    return (
    <div className="container">
      {contacts.map((contact) => {
        // console.log(contact)
        return (
          <div
            key={contact._id}
            className="contact"
            onClick={() => {
              navigate(`${contact._id}`);
            }}
          >
            {/* Diplaying the contacts details */}
            <h2>👤 Contact name: </h2>
            <h1>{contact.name}</h1>
            {/* <h3>Phone number: {contact.phone_number}</h3>
            <h3>Relatioship status: {contact.relationship_status}</h3>
            <h3>Email: {contact.email}</h3> */}
            <h2>📍 Coordinates location: </h2>
            <h1>{contact.location.coordinates[0]} / {contact.location.coordinates[1]}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default ViewContacts;