import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ViewContact = () => {
    const { id } = useParams();
    const [contact, setContact] = useState([]);
    var url = "http://localhost:4001/api/contact/get_contact_by_ID?id=" + id;
    const getContact = async () => {
      const res = await fetch(url,{
        method: "POST",
      });
      const data = await res.json();
      console.log("data",data)
      return data;
    };
  
    //Get contacts
    useEffect(() => {
        const getData = async () => {
          const contactFromServer = await getContact();
          setContact(contactFromServer)
        };
        getData();
    }, [id]);
  
    return (
      <div className="container">
            <div className="contact">
                <h1>{contact.name}</h1>
                <h3>Phone number: {contact.phone_number}</h3>
                <h3>Relatioship status: {contact.relationship_status}</h3>
                <h3>Email: {contact.email}</h3>
                {/* <h3>Location: {contact.location.coordinates[0]}</h3> */}
            </div>
      </div>
    );
};
  
export default ViewContact;