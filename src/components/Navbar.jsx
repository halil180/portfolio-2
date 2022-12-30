import React, { useEffect } from "react";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import { themeChange } from "theme-change";
import { LanguageContext } from "../context/LanguageContext";
import Footer from "./Footer";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const { t, i18n } = useTranslation();
  const {changeLang} = useContext(LanguageContext)

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <>
      <div className="navbar bg-base-100 ">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl text-teal-50"><svg    className="fill-current" width="24" height="24" viewBox="0 0 24 24">
  <path d="M3 10v11h6v-7h6v7h6v-11L12,3z"/>
</svg></Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>
                <ThemeToggle />
              </a>
            </li>
            <li tabIndex={0} className="z-10	">
              <a>
                {t("language")}
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  <button onClick={() => changeLang("en")}>English</button>
                </li>
                <li>
                  <button onClick={() => changeLang("de")}>Deutsch</button>
                </li>
                <li>
                  <button onClick={() => changeLang("fr")}>Français</button>
                </li>
              </ul>
            </li>
            <li>
              <Link to="about">{t("about")}</Link>
            </li>
          </ul>
        </div>
      </div>

      <Outlet />
      <Footer/>
    </>
  );
}

export default Navbar;
