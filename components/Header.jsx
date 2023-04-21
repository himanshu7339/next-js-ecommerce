import Link from "next/link";
import React from "react";
import {BsSearch} from "react-icons/bs"
import {FaUser,FaShoppingCart} from "react-icons/fa"

const Header = () => {
  return (
    <nav className="header">
      <div className="logo">
        <h1>Ecommerce</h1>
      </div>

      <div className="navlinks">
        <Link href={"/home"}>Home</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/about"}>About Us</Link>
        <Link href={"/contact"}>Contact Us</Link>
        <Link href={"/gift"}>Gift Card</Link>
      </div>

      <div className="auth_links">
        <p><BsSearch/></p>
        <p><FaUser/></p>
        <p><FaShoppingCart/> <span>0</span></p>
      </div>
    </nav>
  );
};

export default Header;
