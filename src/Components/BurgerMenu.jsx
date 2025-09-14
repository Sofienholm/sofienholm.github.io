// src/Components/NavLink.jsx
import React, { useState } from "react";
import { elastic as Menu } from "react-burger-menu";
import { NavLink } from "react-router";
import "./BurgerMenu.css"; // styles til knap + menu

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);

  const handleStateChange = (state) => setOpen(state.isOpen);
  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <>
      {/* Egen burger/X-knap */}
      <button
        className={`hamburger ${open ? "is-open" : ""}`}
        aria-label="Menu"
        aria-controls="main-navigation"
        aria-expanded={open}
        onClick={toggle}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      {/* Selve burgermenuen (elastic, venstre som default) */}
      <Menu
        right
        isOpen={open}
        onStateChange={handleStateChange}
        pageWrapId="page-wrap"
        outerContainerId="outer-container"
        customBurgerIcon={false}
        customCrossIcon={false}
        width={260}
        itemListClassName="menu-list"
      >
        <NavLink to="/" end className="menu-item" onClick={close}>
          Home
        </NavLink>
        <NavLink to="/projects" className="menu-item" onClick={close}>
          Projects
        </NavLink>
        <NavLink to="/about" className="menu-item" onClick={close}>
          About
        </NavLink>
        <NavLink to="/contact" className="menu-item" onClick={close}>
          Contact
        </NavLink>
      </Menu>
    </>
  );
}
