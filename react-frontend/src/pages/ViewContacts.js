import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ViewContacts = () => {
    const navigate = useNavigate();
    const [contacts, setContacts] = useState([]);
    const [searchNameStartWith, setSearchNameStartWith] = useState('');
    const [searchNameEndWith, setSearchNameEndWith] = useState('');
    const [searchNameIncludesWith, setSearchNameIncludesWith] = useState('');
    const [searchEmailStartWith, setSearchEmailStartWith] = useState('');
    const [searchEmailEndWith, setSearchEmailEndWith] = useState('');
    const [searchEmailIncludesWith, setSearchEmailIncludesWith] = useState('');
    const [searchPhoneNumberStartWith, setSearchPhoneNumberStartWith] = useState('');
    const [searchPhoneNumberEndWith, setSearchPhoneNumberEndWith] = useState('');
    const [searchPhoneNumberIncludesWith, setSearchPhoneNumberIncludesWith] = useState('');
    const [searchRelationshipStatusStartWith, setSearchRelationshipStatusStartWith] = useState('');
    const [searchRelationshipStatusEndWith, setSearchRelationshipStatusEndWith] = useState('');
    const [searchRelationshipStatusIncludesWith, setSearchRelationshipStatusIncludesWith] = useState('');

    const user_id = localStorage.getItem("user_id");
  // console.log(user_id)
    const getContacts = async () => {
      let url = "http://localhost:4001/api/contact/get_contact_by_his_userID?id=" + user_id;
        const res = await fetch(url,{
          method : "POST",
        });
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
      <div className="filter-section">
      <div>
      <input type={"text"} placeholder={"Search by name starting with.."} onChange={(event) => {setSearchNameStartWith(event.target.value)}}/>
      <input type={"text"} placeholder={"Search by name ending with.."} onChange={(event) => {setSearchNameEndWith(event.target.value)}}/>
      <input type={"text"} placeholder={"Search by name including.."} onChange={(event) => {setSearchNameIncludesWith(event.target.value)}}/>
      </div>
      <div>
      <input type={"text"} placeholder={"Search by email starting with.."} onChange={(event) => {setSearchEmailStartWith(event.target.value)}}/>
      <input type={"text"} placeholder={"Search by email ending with.."} onChange={(event) => {setSearchEmailEndWith(event.target.value)}}/>
      <input type={"text"} placeholder={"Search by email including.."} onChange={(event) => {setSearchEmailIncludesWith(event.target.value)}}/>
      </div>
      <div>
      <input type={"text"} placeholder={"Search by phone number starting with.."} onChange={(event) => {setSearchPhoneNumberStartWith(event.target.value)}}/>
      <input type={"text"} placeholder={"Search by phone number ending with.."} onChange={(event) => {setSearchPhoneNumberEndWith(event.target.value)}}/>
      <input type={"text"} placeholder={"Search by phone number including.."} onChange={(event) => {setSearchPhoneNumberIncludesWith(event.target.value)}}/>
      </div>
      <div>
      <input type={"text"} placeholder={"Search by relationship status starting with.."} onChange={(event) => {setSearchRelationshipStatusStartWith(event.target.value)}}/>
      <input type={"text"} placeholder={"Search by relationship status ending with.."} onChange={(event) => {setSearchRelationshipStatusEndWith(event.target.value)}}/>
      <input type={"text"} placeholder={"Search by relationship status including.."} onChange={(event) => {setSearchRelationshipStatusIncludesWith(event.target.value)}}/>
      </div>
      </div>
      {contacts.filter((contact)=>{
        if(searchNameStartWith === ""){
          return contact
        }else if(contact.name.toLowerCase().startsWith(searchNameStartWith.toLowerCase())){
          return contact
        }
      }).filter((contact)=>{
        if(searchNameEndWith === ""){
          return contact
        }else if(contact.name.toLowerCase().endsWith(searchNameEndWith.toLowerCase())){
          return contact
        }
      }).filter((contact)=>{
        if(searchNameIncludesWith === ""){
          return contact
        }else if(contact.name.toLowerCase().includes(searchNameIncludesWith.toLowerCase())){
          return contact
        }
      }).filter((contact)=>{
        if(searchEmailStartWith === ""){
          return contact
        }else if(contact.email.toLowerCase().startsWith(searchEmailStartWith.toLowerCase())){
          return contact
        }
      }).filter((contact)=>{
        if(searchEmailEndWith === ""){
          return contact
        }else if(contact.email.toLowerCase().endsWith(searchEmailEndWith.toLowerCase())){
          return contact
        }
      }).filter((contact)=>{
        if(searchEmailIncludesWith === ""){
          return contact
        }else if(contact.email.toLowerCase().includes(searchEmailIncludesWith.toLowerCase())){
          return contact
        }
      }).filter((contact)=>{
        if(searchPhoneNumberStartWith === ""){
          return contact
        }else if(contact.phone_number.toLowerCase().startsWith(searchPhoneNumberStartWith.toLowerCase())){
          return contact
        }
      }).filter((contact)=>{
        if(searchPhoneNumberEndWith === ""){
          return contact
        }else if(contact.phone_number.toLowerCase().endsWith(searchPhoneNumberEndWith.toLowerCase())){
          return contact
        }
      }).filter((contact)=>{
        if(searchPhoneNumberIncludesWith === ""){
          return contact
        }else if(contact.phone_number.toLowerCase().includes(searchPhoneNumberIncludesWith.toLowerCase())){
          return contact
        }
      }).filter((contact)=>{
        if(searchRelationshipStatusStartWith === ""){
          return contact
        }else if(contact.relationship_status.toLowerCase().startsWith(searchRelationshipStatusStartWith.toLowerCase())){
          return contact
        }
      }).filter((contact)=>{
        if(searchRelationshipStatusEndWith === ""){
          return contact
        }else if(contact.relationship_status.toLowerCase().endsWith(searchRelationshipStatusEndWith.toLowerCase())){
          return contact
        }
      }).filter((contact)=>{
        if(searchRelationshipStatusIncludesWith === ""){
          return contact
        }else if(contact.relationship_status.toLowerCase().includes(searchRelationshipStatusIncludesWith.toLowerCase())){
          return contact
        }
      }).map((contact) => {
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
            <h3>Phone number: {contact.phone_number}</h3>
            <h3>Relatioship status: {contact.relationship_status}</h3>
            <h3>Email: {contact.email}</h3>
            <h2>📍 Coordinates location: </h2>
            <h1>{contact.location.coordinates[0]} / {contact.location.coordinates[1]}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default ViewContacts;