import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  // To get current path
  const location = useLocation();
  // Iterate over nav items to add into UI
  const navItems = [
    { link: "register", name: "register" },
    { link: "login", name: "login" },
    // { link: "view_contact/:id", name: "view_contact" },
  ];

    // //Catch the current path
    // console.log(location);

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