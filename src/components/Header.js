import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import logo from "../logo.svg";
import { IS_LOGGED_IN } from "../gql/query";

function Header() {
  const { data, client } = useQuery(IS_LOGGED_IN);
  const navigate = useNavigate();

  const logOut = () => {
    //Remove token
    localStorage.removeItem("token");
    // clear the application's cache
    client.resetStore();
    // update local state
    client.writeQuery({
      query: IS_LOGGED_IN,
      data: {
        isLoggedIn: false,
      },
    });
    // redirect the user to the homepage
    navigate("/");
  };
  return (
    <header className="flex items-center justify-between py-7 px-5 h-20 shadow-md z-50 fixed w-full">
      <Link className="flex items-center" to="/">
        <img src={logo} alt="Logo" width={60} height={60} />
        <h1 className="text-2xl">Notedly</h1>
      </Link>
      <div>
        {data.isLoggedIn ? (
          <ul>
            <li className="hover:text-blue-400 duration-300">
              <Link to="/" onClick={logOut}>
                <i className="fa-solid fa-power-off"></i> <span>Log Out</span>
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="flex space-x-5">
            <li className="hover:text-blue-400 duration-300">
              <Link to="signUp">
                <i className="fa-solid fa-user-plus"></i> <span>Sign Up</span>
              </Link>
            </li>
            <li className="hover:text-blue-400 duration-300">
              <Link to="signIn">
                <i className="fa-solid fa-arrow-right-to-bracket"></i>{" "}
                <span>Sign In</span>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;
