import { HiOutlinePlus } from "react-icons/hi2";
import React, { useState } from "react";

interface HeaderProps {
  setAddContact: React.Dispatch<React.SetStateAction<Boolean>>;
}
const Header: React.FC<HeaderProps> = ({setAddContact}) => {

  
  return (
    <div className=" md:w-full flex justify-between  md:p-10 p-5 w-fit ">
    <h1 className="" >Phone book</h1>
    <div className="w-1/2 flex justify-center items-center md:space-x-3 ">
    <input type="text" name="search bar" placeholder="Search"  className=" w-4/6 rounded-full border-2  p-2 bg-background border-gray-500"/>
    <HiOutlinePlus className="size-11 " onClick={()=>(setAddContact(true))}  />
    </div>
    </div>
  )
}

export default Header