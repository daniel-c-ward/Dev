import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function burgerMenu() {
    setIsOpen(!isOpen);
  }



  return (
    <>
    <nav className="lg:px-18 lg:pt-18 md:px-5 md:pt-5 pt-2.5 p-2.5 flex items-end justify-between">
      <NavLink to="/" className="font-bold xl:text-7xl lg:text-5xl md:text-3xl text-2xl">DW</NavLink>
      <div className="gap-5 font-bold xl:text-3xl lg:text-2xl md:flex hidden select-none">
        <NavLink to="/" className={({ isActive }) => isActive ? 'border-b-4 border-green-800' : ''}>Home</NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'border-b-4 border-green-800' : ''}>Portfolio</NavLink>
        <NavLink to="/ui-samples" className={({ isActive }) => isActive ? 'border-b-4 border-green-800' : ''}>UI Samples</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'border-b-4 border-green-800' : ''}>Projects</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'border-b-4 border-green-800' : ''}>Contact</NavLink>
      </div>
      <button 
      className="md:hidden flex flex-col gap-1.5" 
      onClick={burgerMenu}
      >
        <span className="w-8 h-0.5 bg-white rounded-2xl"></span>
        <span className="w-8 h-0.5 bg-white rounded-2xl"></span>
        <span className="w-8 h-0.5 bg-white rounded-2xl"></span>
      </button>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.1 }}
          style={{ transformOrigin: 'top right' }}
        className="flex flex-col absolute bg-gray-300 text-black rounded-2xl top-1 right-1 p-2">
        <NavLink to="/" onClick={burgerMenu} className={({ isActive }) => isActive ? 'border-b-4 border-green-800' : ''}>Home</NavLink>
        <NavLink to="/portfolio" onClick={burgerMenu} className={({ isActive }) => isActive ? 'border-b-4 border-green-800' : ''}>Portfolio</NavLink>
        <NavLink to="/ui-samples" onClick={burgerMenu} className={({ isActive }) => isActive ? 'border-b-4 border-green-800' : ''}>UI Samples</NavLink>
        <NavLink to="/projects" onClick={burgerMenu} className={({ isActive }) => isActive ? 'border-b-4 border-green-800' : ''}>Projects</NavLink>
        <NavLink to="/contact" onClick={burgerMenu} className={({ isActive }) => isActive ? 'border-b-4 border-green-800' : ''}>Contact</NavLink>
      </motion.div>
      )}
    </nav>
    </>
  )
}
