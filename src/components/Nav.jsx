import { useState, useEffect } from "react";
import { hamburger, logoNicFit } from "../assets/icons";
import { navLinks } from "../constants";
import "../index.css";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
  }, []);

  return (
    <header className="padding-x pt-3 pb-4 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={logoNicFit}
            alt="logo"
            width={130}
            height={45}
            className="m-0 w-[130px] h-[45px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden font-Poppins">
          {navLinks.map((item) => (
            <li key={item.label} className="relative">
              <a
                href={item.href}
                className={`nav-link font-Poppins leading-normal text-lg text-black relative p-2 ${
                  activeLink === item.href ? "active" : ""
                }`}
                onClick={() => setActiveLink(item.href)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-8 text-xl leading-normal font-bold font-Poppins max-lg:hidden ">
          <a href="/" className="p-2 hover:text-primary-text">
            Masuk
          </a>
          <a
            href="/"
            className="bg-primary-text text-white p-2 px-5 rounded-lg hover:bg-primary-text-hover">
            Daftar
          </a>
        </div>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
