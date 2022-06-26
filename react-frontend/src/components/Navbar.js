import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  // To get current path
  const location = useLocation();
  // Iterate over nav items to add into UI
  const navItems = [
    { link: "register", name: "register" },
    { link: "login", name: "login" },
    { link: "view_contact/:id", name: "view_contact" },
  ];

    // //Catch the current path
    // console.log(location);

  return (
    <div>Navbar</div>
  );
};

export default Navbar;