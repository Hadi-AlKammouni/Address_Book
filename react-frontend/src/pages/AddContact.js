import { useState } from "react";

//Calling add contact api
const submitAddContact = async (info) => {

    try {
        const res = await fetch("http://localhost:4001/api/contact/add_contact",{
            method: "POST",
            headers:{
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(info)
        });

        const data = await res.json();
        alert("You added new contact in successfully ✅")
        return data;
    } catch (error){
        console.log(error)
    }
};

//Main function
const AddContact = () => {
 // Initialize Input State
 const [name, setName] = useState("");
 const [phone_number, setPhoneNumber] = useState("");
 const [relationship_status, setrelationship_status] = useState("");
 const [email, setEmail] = useState("");
 const [location1, setLocation1] = useState("");
 const [location2, setLocation2] = useState("");

 //Add Data to Backend on Submit
 const onSubmit = (e) => {
   e.preventDefault();
   if (!name || !phone_number || !relationship_status || !email || !location1 || !location2) {
     alert("Please fill all fields!");
     return;
   }

   const user = localStorage.getItem("user_id")
   const location = {"type" : "Point", "coordinates" : [location1,location2]};
   submitAddContact({ name, phone_number, relationship_status, email, location, user });
   setName("");
   setPhoneNumber("");
   setrelationship_status("");
   setEmail("");
   setLocation1("");
   setLocation2("");
 };

 return (
   <form className="add-form" onSubmit={onSubmit}>
     <div className="form-control">
       <label>Contact Name</label>
       <input
         type={"text"}
         placeholder={"Insert Name"}
         value={name}
         onChange={(e) => {
           setName(e.target.value);
         }}
       />
     </div>

     <div className="form-control">
       <label>Contact Phone Number</label>
       <input
         type={"text"}
         placeholder={"Insert Phone Number"}
         value={phone_number}
         onChange={(e) => {
            setPhoneNumber(e.target.value);
         }}
       />
     </div>

     <div className="form-control">
       <label>Contact Relationship Status</label>
       <input
         type={"text"}
         placeholder={"Insert Relationship Statusr"}
         value={relationship_status}
         onChange={(e) => {
            setrelationship_status(e.target.value);
         }}
       />
     </div>

     <div className="form-control">
       <label>Contact Email</label>
       <input
         type={"email"}
         placeholder={"Insert Email"}
         value={email}
         onChange={(e) => {
            setEmail(e.target.value);
         }}
       />
     </div>

     <div className="form-control">
       <label>Contact Location 1</label>
       <input
         type={"text"}
         placeholder={"Insert long."}
         value={location1}
         onChange={(e) => {
            setLocation1(e.target.value);
         }}
       />
     </div>

     <div className="form-control">
       <label>Contact Location 2</label>
       <input
         type={"text"}
         placeholder={"Insert lat."}
         value={location2}
         onChange={(e) => {
            setLocation2(e.target.value);
         }}
       />
     </div>
     
     <input type={"submit"} value="Create Contact" className="btn btn-block" />
   </form>
 );
}

export default AddContact;