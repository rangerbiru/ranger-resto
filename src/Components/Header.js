import React from "react";
import "./style.css";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";

const Header = () => {
  window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="flex items-center py-10 px-52 fixed w-full transisi max-lg:px-4 max-xl:px-10"
      id="header"
    >
      <div className="logo">
        <h2 className="uppercase border-2 border-white py-1.5 px-5 text-2xl font-semibold text-white cursor-pointer">
          Resto
        </h2>
      </div>

      <nav className="ml-auto block max-lg:hidden">
        <ul className="flex font-medium gap-6 text-white">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hamburger */}
      <div className="hidden max-lg:block ml-auto">
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          direction={"right"}
          color="#fff"
          rounded
        />

        {isOpen ? (
          <>
            <ul className="absolute gap-6 w-full flex flex-col left-0 top-24 py-4 px-6 mt-2 bg-white ham-menu">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};

export default Header;
