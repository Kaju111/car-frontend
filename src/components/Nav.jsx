import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsCaretDownFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { useGlobalContext } from "../context";

const Header = () => {
  const [nav, setNav] = useState(false);

  const { name, setName } = useGlobalContext();

  const handleSearch = (text) => {
    console.info(text)
    setName(text)
  }

  return (
    <div className="bg-[#d3e6eb] pt-1">
      <div className="h-15 shadow-2xl py-2 px-3 justify-between bg-[#e1eff2] flex  w-11/12 rounded-xl mx-auto">
        <div className="flex flex-row gap-8">
          <span className="flex flex-row w-72 h-7 bg-gray-100 rounded-xl shadow-2xl py-2 px-2 outline-none text-gray-500 ">
            <input
              type="text"
              className="outline-none bg-gray-100"
              placeholder="Search..."
              value={name}
              onChange={(e) => {
                handleSearch(e.target.value)
              }}
            />
            <BiSearch
              className="h-4 w-4"
            />
          </span>

          <span className="hidden md:flex flex-row gap-8 ">
            <span className="flex flex-row gap-1">
              <nav className="">Relevance</nav>
              <BsCaretDownFill className=" w-4 h-6" />
            </span>
            <span className="flex flex-row gap-1">
              <nav>All brands</nav>
              <BsCaretDownFill className="w-4 h-6" />
            </span>
          </span>
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 md:hidden"
        >
          {nav ? (
            <FaTimes className="w-5 h-6" />
          ) : (
            <AiOutlineMenu className="w-5 h-6" />
          )}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#d3e6eb]">
            <li className="text-4xl " onClick={() => setNav(!nav)}>
              <li className="cursor-pointer border-2 border-black px-5 py-1 rounded-md my-8">
                Relevance
              </li>
              <li className="cursor-pointer border-2 border-black px-5 py-1 rounded-md">
                All brands
              </li>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
