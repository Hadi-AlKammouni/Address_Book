import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ViewContact = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [contact, setContact] = useState([]);
    
    //Get the clicked contact details
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
  
    //Calling update api
    const updateContact = async () => {
        alert("Now select what to change")
        let what_to_change = prompt(
            "Enter N to change the contact name // E to change the contact email // # to change the contact phone number // R to change relationship status // anything else to skip"
        );
        console.log(what_to_change)
        if (what_to_change === "N"){
            let new_name= prompt("Choose new name");
            console.log(new_name)
            var info = {"name" : new_name}
            alert(`Name has been updated to ${new_name}✌`)
        }else if (what_to_change === "E"){
            let new_email= prompt("Choose new email");
            console.log(new_email)
            var info = {"email" : new_email}
            alert(`Email has been to updated ${new_email}✌`)
        }else if (what_to_change === "#"){
            let new_phone_number= prompt("Choose new phone number");
            console.log(new_phone_number)
            var info = {"phone_number" : new_phone_number}
            alert(`Phone number has been updated to ${new_phone_number}✌`)
        }else if (what_to_change === "R"){
            let new_relationship_status= prompt("Choose new relationship status");
            console.log(new_relationship_status)
            var info = {"relationship_status" : new_relationship_status}
            alert(`Relationship status has been updated to ${new_relationship_status}✌`)
        }else if (what_to_change !== ("N" || "E" || "#" || "R")){
            alert(`Nothing changed`)
        }
    
        var update_url = "http://localhost:4001/api/contact/update_contact?id=" + id;
        const res = await fetch(update_url,{
          method: "POST",
          headers:{
            "Content-Type" : "application/json",
          },
          body: JSON.stringify(info)
        });
        window.location.reload ();
    };

    //Calling remove api
    const removeContact = async () => {
        var update_url = "http://localhost:4001/api/contact/remove_contact?id=" + id;
        const res = await fetch(update_url,{
          method: "POST",
          headers:{
            "Content-Type" : "application/json",
          },
          body: JSON.stringify({id : id})
        });
        alert("Contact has been removed successfully!")
        navigate("/view_contacts")
    };
    
    return (
        <section>
      <div className="container">
            <div className="contact">
                <h1>{contact.name}</h1>
                <h3>Phone number: {contact.phone_number}</h3>
                <h3>Relatioship status: {contact.relationship_status}</h3>
                <h3>Email: {contact.email}</h3>
                {/* <h3>Location: {contact.location.coordinates[0]}</h3> */}
            </div>
      </div>
      <div className="update-remove-div">
      <input type={"button"} value={"update"} className="update-btn" onClick={updateContact}/>
      <input type={"button"} value={"remove"} className="remove-btn" onClick={removeContact}/>
      </div>
      </section>
    );
};
  
export default ViewContact;