/*eslint-disable*/
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown";
import { validUser } from "apis/auth";
import PocketDropdown from "components/Dropdowns/PocketDropdown";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(false);
  const [balance, setBalance] = React.useState(0);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const isValid = async () => {
    const data = await validUser();
    if (data?.user) {
      setIsLogin(true);
      setBalance(data.balance);
      setIsAdmin(data?.user.role === "admin");
    }
  };
  useEffect(() => {
    isValid();
  }, []);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase h-10"
            >
              <img
                src="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo.svg"
                className="h-8"
              ></img>
            </Link>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <Link
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  to="/jobs"
                >
                  Jobs
                </Link>
              </li>
            </ul>
            {isLogin ? (
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                {isAdmin ? (
                  <li className="flex items-center">
                    <IndexDropdown />
                  </li>
                ) : null}
                <li className="flex items-center">
                  <Link
                    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    to="/manage/myJobs"
                  >
                    <i className="text-blueGray-400 fas fa-tasks text-lg leading-lg " />
                    <span className="inline-block ml-2">Manage Job</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link
                    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    to="/chats"
                  >
                    <i className="text-blueGray-400 fab fa-facebook-messenger text-lg leading-lg " />
                    <span className="inline-block ml-2">Chat</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <PocketDropdown balance={balance || 0} isValid={isValid} />
                </li>
                <li className="flex items-center">
                  <UserDropdown />
                </li>
              </ul>
            ) : (
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="flex items-center">
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <Link to="/auth/login">
                      <i className="fas fa-user mr-1"></i> Login
                    </Link>
                  </button>
                  <button
                    className=" text-black active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <Link to="/auth/register">
                      <i className="fas fa-registered"></i> Register
                    </Link>
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
