import {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {hamburger, logoNicFit} from "../assets/icons";
import {navLinks} from "../constants";
import "../index.css";
import {Button} from "./ui/button.jsx";
import {FaUser} from "react-icons/fa";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu.jsx";
import axios from "../utils/axios.js";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const refreshToken = localStorage.getItem("refresh_token");
    if (refreshToken) {
      setIsAuthenticated(true);
      fetchUsername();
    }
  }, []);

  const fetchUsername = async () => {
    try {
      const response = await axios.get("/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("refresh_token")}`,
        },
      });
      const data = response.data;
      setUsername(data.username);
      localStorage.setItem("username", data.username);
    } catch (error) {
      console.error("Error fetching username:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("username");
    setIsAuthenticated(false);
    setUsername("");
    navigate("/login");
  };

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
        {isAuthenticated ? (
          <div className="flex gap-8 text-xl leading-normal font-bold font-Poppins max-lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-x-5">
                  <span className="text-text16_24 font-medium hidden lg:inline">
                    {username}
                  </span>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full">
                    <FaUser className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Akun</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/profile">Profil</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
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
        )}
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
