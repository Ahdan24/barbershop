"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-10 py-3 px-6 sm:px-10 flex justify-center items-center transition-colors duration-300 ${
        isScrolled
          ? "bg-black bg-opacity-50 text-black"
          : "bg-gray-800 text-white"
      }`}
    >
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } absolute md:relative top-16 left-0 md:top-0 w-full md:w-auto bg-gray-900 md:bg-transparent flex-col md:flex-row md:flex items-center gap-2 font-bold p-4 md:p-0 ${
          isScrolled ? "text-black" : "text-white-500"
        }`}
      >
        <Link
          href={"/"}
          className="rounded-xl bg-blue-500 py-1 px-5 hover:bg-red-500"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>

        <Link
          href={"/about"}
          className="rounded-xl bg-blue-500 py-1 px-5 hover:bg-red-500"
          onClick={() => setMenuOpen(false)}
        >
          About Us
        </Link>

        <div className="flex space-x-4 items-center">
          {!menuOpen && (
            <Image
              src="/B-BarberShopIcon.png"
              alt="Logo"
              width={100}
              height={30}
            />
          )}
        </div>

        <Link
          href={"/service"}
          className="rounded-xl bg-blue-500 py-1 px-5 hover:bg-red-500"
          onClick={() => setMenuOpen(false)}
        >
          Services
        </Link>

        <Link
          href={"/ourTeam"}
          className="rounded-xl bg-blue-500 py-1 px-5 hover:bg-red-500"
          onClick={() => setMenuOpen(false)}
        >
          Our Team
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
