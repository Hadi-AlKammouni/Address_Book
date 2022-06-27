import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ViewContacts = () => {
    const navigate = useNavigate();
    const [contacts, setContacts] = useState([]);
    //The following are used for filtering purpose
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
    //The following are used for changing visibility of filters fields
    const [isShown, setIsShown] = useState(true);
    const [isShown2, setIsShown2] = useState(true);
    const [isShown3, setIsShown3] = useState(true);
    const [isShown4, setIsShown4] = useState(true);

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

    //handleclick functions to show and hide filters fields
    const handleClick = event => {
      // 👇️ toggle visibility
      setIsShown(current => !current);
    };
    const handleClick2 = event => {
      // 👇️ toggle visibility
      setIsShown2(current => !current);
    };
    const handleClick3 = event => {
      // 👇️ toggle visibility
      setIsShown3(current => !current);
    };
    const handleClick4 = event => {
      // 👇️ toggle visibility
      setIsShown4(current => !current);
    };

    return (
    <div className="container">
      <div className="filter-section">
        <div>
          <button onClick={handleClick}>Search By Name</button>
          <input style={{display: isShown ? 'none' : 'block'}} type={"text"} placeholder={"Search by name starting with.."} onChange={(event) => {setSearchNameStartWith(event.target.value)}}/>
          <input style={{display: isShown ? 'none' : 'block'}} type={"text"} placeholder={"Search by name ending with.."} onChange={(event) => {setSearchNameEndWith(event.target.value)}}/>
          <input style={{display: isShown ? 'none' : 'block'}} type={"text"} placeholder={"Search by name including.."} onChange={(event) => {setSearchNameIncludesWith(event.target.value)}}/>
        </div>
        <div>
          <button onClick={handleClick2}>Search By Email</button>
          <input style={{display: isShown2 ? 'none' : 'block'}} type={"text"} placeholder={"Search by email starting with.."} onChange={(event) => {setSearchEmailStartWith(event.target.value)}}/>
          <input style={{display: isShown2 ? 'none' : 'block'}} type={"text"} placeholder={"Search by email ending with.."} onChange={(event) => {setSearchEmailEndWith(event.target.value)}}/>
          <input style={{display: isShown2 ? 'none' : 'block'}} type={"text"} placeholder={"Search by email including.."} onChange={(event) => {setSearchEmailIncludesWith(event.target.value)}}/>
        </div>
        <div>
          <button onClick={handleClick3}>Search By Phone Number</button>
          <input style={{display: isShown3 ? 'none' : 'block'}} type={"text"} placeholder={"Search by phone number starting with.."} onChange={(event) => {setSearchPhoneNumberStartWith(event.target.value)}}/>
          <input style={{display: isShown3 ? 'none' : 'block'}} type={"text"} placeholder={"Search by phone number ending with.."} onChange={(event) => {setSearchPhoneNumberEndWith(event.target.value)}}/>
          <input style={{display: isShown3 ? 'none' : 'block'}} type={"text"} placeholder={"Search by phone number including.."} onChange={(event) => {setSearchPhoneNumberIncludesWith(event.target.value)}}/>
        </div>
        <div>
          <button onClick={handleClick4}>Search By Relationship Status</button>
          <input style={{display: isShown4 ? 'none' : 'block'}} type={"text"} placeholder={"Search by relationship status starting with.."} onChange={(event) => {setSearchRelationshipStatusStartWith(event.target.value)}}/>
          <input style={{display: isShown4 ? 'none' : 'block'}} type={"text"} placeholder={"Search by relationship status ending with.."} onChange={(event) => {setSearchRelationshipStatusEndWith(event.target.value)}}/>
          <input style={{display: isShown4 ? 'none' : 'block'}} type={"text"} placeholder={"Search by relationship status including.."} onChange={(event) => {setSearchRelationshipStatusIncludesWith(event.target.value)}}/>
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