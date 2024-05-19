import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x pt-3 pb-4 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={130}
            height={45}
            className="m-0 w-[130px] h-[45px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-Poppins leading-normal text-lg text-black">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-8 text-xl leading-normal font-bold font-Poppins max-lg:hidden wide:mr-24">
          <a href="/" className="p-2">
            Masuk
          </a>
          <a
            href="/"
            className="bg-primary-text text-white p-2 px-5 rounded-lg">
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
