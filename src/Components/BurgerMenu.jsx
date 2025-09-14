// BurgerMenu.jsx
import React, { useState } from "react";
import { elastic as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import "./BurgerMenu.css"; // CSS styling

export default function BurgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Menu
      isOpen={menuOpen}
      onStateChange={handleStateChange}
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      width={"250px"}
      // hvis du vil have menuen fra højre:
      // right
      // bruger default burger og cross ikon
      // du kan override med customBurgerIcon og customCrossIcon hvis nødvendigt
    >
      <NavLink to="/" end className="menu-item" onClick={closeMenu}>
        Home
      </NavLink>
      <NavLink to="/projects" className="menu-item" onClick={closeMenu}>
        Projects
      </NavLink>
      <NavLink to="/about" className="menu-item" onClick={closeMenu}>
        About
      </NavLink>
      <NavLink to="/contact" className="menu-item" onClick={closeMenu}>
        Contact
      </NavLink>
    </Menu>
  );
}
