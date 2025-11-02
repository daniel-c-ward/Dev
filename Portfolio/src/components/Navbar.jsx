import React from 'react'
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <>
    <nav className="lg:px-18 lg:pt-18 md:px-5 md:pt-5 pt-2.5 p-2x.5 flex items-end justify-between">
      <NavLink to="/" className=" font-bold lg:text-5xl md:text-3xl text-md">DW</NavLink>
      <div className="flex gap-5 font-bold lg:text-2xl text-2xl select-none">
        <NavLink to="/" className={({ isActive }) => isActive ? 'border-b-4 border-green-800' : ''}>Home</NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'border-b-4 border-green-800' : ''}>Portfolio</NavLink>
        <NavLink to="/ui-samples" className={({ isActive }) => isActive ? 'border-b-4 border-green-800' : ''}>UI Samples</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'border-b-4 border-green-800' : ''}>Projects</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'border-b-4 border-green-800' : ''}>Contact</NavLink>
      </div>
    </nav>
    </>
  )
}
