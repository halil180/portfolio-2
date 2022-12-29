import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { themeChange } from "theme-change";
import Footer from "./Footer";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
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
                language
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
                  <a>English</a>
                </li>
                <li>
                  <a>Deutsch</a>
                </li>
                <li>
                  <a>Francais</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="about">About</Link>
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
