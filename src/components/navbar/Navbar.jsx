"use client";
import Link from "next/link";
import React from "react";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";


const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52">
            {links.map((link) => (
              <li key={link.id}>
                <Link href={link.url} className="p-4 font-semibold text-lg group">
                  <span className="group-hover:underline group-hover:text-rose-500 transition-all duration-300">
                    {link.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <span className="text-xl font-bold" style={{color:'#38bdf8'}}>Abdur__Rahman</span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {links.map((link) => (
            <li key={link.id}>
              <Link href={link.url} className="p-4 font-semibold text-lg group">
                <span className="group-hover:underline group-hover:text-rose-500 transition-all duration-300">
                  {link.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="mx-2">
          <DarkModeToggle />
        </div>
        
        <div className="dropdown dropdown-end">
        <button style={{backgroundColor:'#38bdf8', border:'none' }} className="btn  btn-sm px-6">Login</button>
        </div>


      </div>
    </div>
  );
};

export default Navbar;
