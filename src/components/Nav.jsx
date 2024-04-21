import { headerLogo } from "../assets/images";
import { hamburger, darkmode, lightmode } from "../assets/icons";
import { navLinks } from "../constants";
import { useState, useEffect } from "react";
const Nav = () => {
  const [themeIcon, setThemeIcon] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setThemeIcon(darkmode);
    } else {
      setThemeIcon(lightmode);
    }
  }, []);

  useEffect(() => {
    if (themeIcon === darkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeIcon]);

  const changeTheme = () => {
    themeIcon === darkmode ? setThemeIcon(lightmode) : setThemeIcon(darkmode);
  };

  return (
    <header className="paddding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29}></img>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray dark:text-coral-red"
              >
                {item.label}
              </a>
            </li>
          ))}
          <ul>
            <div className="bg-red-200 rounded-3xl p-2  w-20 flex items-center justify-center">
              <img
                src={themeIcon === darkmode ? lightmode : darkmode}
                width={25}
                height={25}
                onClick={changeTheme}
              ></img>
            </div>
          </ul>
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25}></img>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
