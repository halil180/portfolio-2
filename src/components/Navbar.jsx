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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.05 0-3.875-.788q-1.825-.787-3.187-2.15q-1.363-1.362-2.15-3.187Q2 14.05 2 12q0-2.075.788-3.887q.787-1.813 2.15-3.175Q6.3 3.575 8.125 2.787Q9.95 2 12 2q2.075 0 3.887.787q1.813.788 3.175 2.151q1.363 1.362 2.15 3.175Q22 9.925 22 12q0 2.05-.788 3.875q-.787 1.825-2.15 3.187q-1.362 1.363-3.175 2.15Q14.075 22 12 22Zm0-2.05q.65-.9 1.125-1.875T13.9 16h-3.8q.3 1.1.775 2.075q.475.975 1.125 1.875Zm-2.6-.4q-.45-.825-.787-1.713Q8.275 16.95 8.05 16H5.1q.725 1.25 1.812 2.175Q8 19.1 9.4 19.55Zm5.2 0q1.4-.45 2.487-1.375Q18.175 17.25 18.9 16h-2.95q-.225.95-.562 1.837q-.338.888-.788 1.713ZM4.25 14h3.4q-.075-.5-.113-.988Q7.5 12.525 7.5 12t.037-1.012q.038-.488.113-.988h-3.4q-.125.5-.188.988Q4 11.475 4 12t.062 1.012q.063.488.188.988Zm5.4 0h4.7q.075-.5.113-.988q.037-.487.037-1.012t-.037-1.012q-.038-.488-.113-.988h-4.7q-.075.5-.112.988Q9.5 11.475 9.5 12t.038 1.012q.037.488.112.988Zm6.7 0h3.4q.125-.5.188-.988Q20 12.525 20 12t-.062-1.012q-.063-.488-.188-.988h-3.4q.075.5.112.988q.038.487.038 1.012t-.038 1.012q-.037.488-.112.988Zm-.4-6h2.95q-.725-1.25-1.813-2.175Q16 4.9 14.6 4.45q.45.825.788 1.712q.337.888.562 1.838ZM10.1 8h3.8q-.3-1.1-.775-2.075Q12.65 4.95 12 4.05q-.65.9-1.125 1.875T10.1 8Zm-5 0h2.95q.225-.95.563-1.838q.337-.887.787-1.712Q8 4.9 6.912 5.825Q5.825 6.75 5.1 8Z"/></svg>
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
