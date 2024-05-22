import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { hamburger, logoNicFit } from "../assets/icons";
import { navLinks } from "../constants";
import "../index.css";

const Nav = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <header className="padding-x pt-3 pb-4 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link to="/">
          <img
            src={logoNicFit}
            alt="logo"
            width={130}
            height={45}
            className="m-0 w-[130px] h-[45px]"
          />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden font-Poppins">
          {navLinks.map((item) => (
            <li key={item.label} className="relative">
              <Link
                to={item.href}
                className={`nav-link font-Poppins leading-normal text-lg text-black relative p-2 ${
                  activeLink === item.href ? "active" : ""
                }`}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-8 text-xl leading-normal font-bold font-Poppins max-lg:hidden">
          <Link to="/login" className="p-2 hover:text-primary-text">
            Masuk
          </Link>
          <Link
            to="/register"
            className="bg-primary-text text-white p-2 px-5 rounded-lg hover:bg-primary-text-hover">
            Daftar
          </Link>
        </div>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
