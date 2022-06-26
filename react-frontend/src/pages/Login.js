import { useState } from "react";

//Calling login api upon submitting login info
const submitLogin = async (info) => {
    try {
        const res = await fetch("http://localhost:4001/api/user/login",{
            method: "POST",
            headers:{
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(info)
        });

        const data = await res.json();
        // console.log(data);
        localStorage.setItem("token",data.token)
        localStorage.setItem("user_id",data._id)
        localStorage.setItem("user_name",data.name)
        alert("You logged in successfully ✅")
        window.location.reload ();
        return data;
    } catch (error){
        alert("Wrong email and/or password!")
    }
};

//Main function
const Login = () => {

    // Initialize Input State
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    //Add Data to Backend on Submit
    const onSubmit = (e) => {
      e.preventDefault();
      if (!email || !password) {
        alert("Please fill both fields!");
        return;
      }
      submitLogin({ email, password});
      setEmail("");
      setPassword("");
    };
  
    return (
      <form className="add-form" onSubmit={onSubmit}>
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
        
        <input type={"submit"} value="Login" className="btn btn-block" />
      </form>
    );
}
  export default Login;