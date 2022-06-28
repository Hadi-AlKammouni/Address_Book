import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  // To get current path
  const location = useLocation();
  // Iterate over nav items to add into UI
  const navItems = [
    { link: "register", name: "Register" },
    { link: "login", name: "Login" },
    // { link: "view_contacts", name: "View Contacts" },
  ];
  
  const loggedIN = localStorage.getItem("token")
  const user_name = localStorage.getItem("user_name")
  if (loggedIN !== null){
    navItems[0] = {link: "#", name: `Welcome ${user_name}`};
    navItems[1] = {link: "login", name: `Login with # account`};
    navItems.push({ link: "view_contacts", name: "View Contacts" });
    navItems.push({ link: "add_contact", name: "Add Contact" });
    navItems.push({ link: "logout", name: "Logout" });
  } 

    //Catch the current path
    console.log(location);

  return (
    <nav className="top-bar">
      <ul className="nav-items">
        {navItems.map((navItem, index) => {
          return (
            <NavLink key={index} to={navItem.link}>
              <li>{navItem.name}</li>
            </NavLink>
          );
        })}
        {/* {location.pathname.includes("") && (
          <NavLink to="view_contact/:id">
            <li>View contact</li>
          </NavLink>
        )} */}
      </ul>
    </nav>
  );
};

export default Navbar;