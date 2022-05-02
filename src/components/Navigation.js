import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul className="flex flex-col space-y-2">
        <li className="hover:text-blue-400 duration-300">
          <Link to="/">
            <i className="fa-solid fa-house"></i> <span>Home</span>
          </Link>
        </li>
        <li className="hover:text-blue-400 duration-300">
          <Link to="newnote">
            <i className="fa-solid fa-file-circle-plus"></i>{" "}
            <span>New note</span>
          </Link>
        </li>
        <li className="hover:text-blue-400 duration-300">
          <Link to="mynotes">
            <i className="fa-solid fa-book-open"></i> <span>My notes</span>
          </Link>
        </li>
        <li className="hover:text-blue-400 duration-300">
          <Link to="favorites">
            <i className="fa-solid fa-star"></i> <span>Favorites</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
