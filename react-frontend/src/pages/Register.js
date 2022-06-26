import { useState } from "react";

//Calling register api upon submitting register info
const submitRegister = async (info) => {
    try {
        const res = await fetch("http://localhost:4001/api/user/register",{
            method: "POST",
            headers:{
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(info)
        });

        const data = await res.json();
        // console.log(data);
        localStorage.setItem("token",data.token)
        alert("You registered successfully ✅")
        return data;
    } catch (error){
        console.log(error)
    }
};

//Main function
const Register = () => {

    // Initialize Input State
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    //Add Data to Backend on Submit
    const onSubmit = (e) => {
      e.preventDefault();
      if (!name || !email || !password) {
        alert("Please fill all fields!");
        return;
      }
      submitRegister({ name, email, password});
      setName("");
      setEmail("");
      setPassword("");
    };
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
            <label>Name</label>
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
            <label>Email</label>
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
            <label>Password</label>
            <input
              type={"password"}
              placeholder={"Insert Password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          
          <input type={"submit"} value="Register" className="btn btn-block" />
        </form>
      );
}

export default Register;