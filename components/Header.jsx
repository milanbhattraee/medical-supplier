"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const headerItem = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Products", href: "#product" },
  { title: "Services", href: "#service" },
  { title: "Clients", href: "#client" },
  { title: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`w-full sticky top-0 bg-white z-50 ${
        isOpen && "h-screen"
      } md:h-10 px-6 sm:px-8 md:px-10 lg:px-20  md:py-10 flex md:flex-row flex-col md:justify-around justify-start md:items-center items-start  layout text-black shadow-md border-b border-gray-300`}
    >
      <div className="flex gap-x-3 justify-between items-center">
        <Link href={"/"}>
          <Image
            className="drop-shadow-xl w-full h-20 "
            src="/danfeLogo.png"
            width={200}
            height={200}
            alt="logo"
          />
        </Link>
      </div>
      <div>
        <ul className=" hidden font-semibold md:flex space-x-4 lg:space-x-6">
          {headerItem.map((item, index) => (
            <li key={index} className="cursor-pointer text-md text-gray-700">
              <Link className="w-full hover:text-sky-800" href={item.href}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* for mobile */}

      <div className="md:w-auto sm:px-5  md:px-0 w-full ">
        {isOpen && (
          <ul className="w-full mt-6 items-center font-semibold  flex md:hidden flex-col space-y-4 ">
            {headerItem.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer w-full text-center text-md text-gray-700 hover:text-black"
              >
                <Link
                  className="w-full block hover:text-sky-800"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  href={item.href}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <button
          className={`md:w-32 ${!isOpen && "hidden"}
    md:block ${
      isOpen ? " mt-6 w-full" : ""
    } h-10 primary rounded-xl text-white`}
        >
          Get A Quote
        </button>

        {isOpen ? (
          <GrClose
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden absolute top-10 right-12  text-2xl  cursor-pointer hover:rotate-90"
          />
        ) : (
          <GiHamburgerMenu
            onClick={toggleMenu}
            className="md:hidden absolute top-10 right-12 text-2xl cursor-pointer"
          />
        )}
      </div>
    </nav>
  );
};

export default Header;
