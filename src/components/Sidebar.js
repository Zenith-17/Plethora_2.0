import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [path,setPath]=useState("");
  const [position,setPosition]=useState("static");
  const [zindex,setZIndex]=useState("0");
  
  const isMenuOpen = useSelector((state) => state.toggle_app.isMenuOpen); //subscribing yo the toggle_app.isMenuOpen part of the redux store
  useEffect(()=>{
//     window.location.href: This is a property of the window object in the browser's JavaScript environment. It represents the complete URL (including the protocol, domain, path, and query parameters) of the current webpage.

// window.location.href.includes("watch"): The includes() method is a JavaScript function that is used to check whether a specific substring (in this case, "watch") is present within the window.location.href string. The includes() method returns a boolean value (true or false) based on whether the substring is found or not.

    //this will be used in conditional rendering of sidebar
    setPath(window.location.href.includes("watch"))
    if(path==="true")
    {
      setPosition("relative");
      setZIndex("10");
    }
    else{
      setPosition("");
      setZIndex("");
    }
   
    }
    ,[path])
  return isMenuOpen ? (
    
    <div className={`shadow-lg bg-fixed my-20 px-4 h-[100vh] ${path===1?position && zindex:""}  bg-gray-300 dark:shadow-white dark:bg-slate-700 `}>
  
      <ul className="overflow-scroll-x pl-6 pt-6 w-[8rem] hover:cursor-pointer">
        <li className="flex justify-center my-6  hover:bg-gray-100  dark:hover:bg-gray-800">
          <Link to="/">
            <span className="material-symbols-outlined  font-thin ">
              Home
            </span>
            <span className="pl-1 text-xl ">Home</span>
          </Link>
        </li>
        <li className="flex justify-center my-6 hover:bg-gray-100  dark:hover:bg-gray-800">
          <span className="material-symbols-outlined p-1 font-thin">movie</span>
          <Link to="/shorts">
            <span className=" p-1 text-xl ">Shorts</span>
          </Link>
        </li>
        <li className="flex justify-center  hover:bg-gray-100  dark:hover:bg-gray-800">
          <span className="material-symbols-outlined p-1 font-thin">
            subscriptions
          </span>
          <span className="p-1  text-xl mb-4">Subs...</span>
        </li>
        <li className="flex justify-center my-2 hover:bg-gray-100  dark:hover:bg-gray-800">
          <span className="material-symbols-outlined p-1 font-thin">
            video_library
          </span>
          <span className="p-1  text-xl mb-4">Library</span>
        </li>
      </ul>
      <div className="border border-gray-100 my-4 "></div>
      <ul className="overflow-hidden hover:cursor-pointer">
        <li className="flex justify-center my-2 hover:bg-gray-100  dark:hover:bg-gray-800">
          <span className="material-symbols-outlined p-1 font-thin">
            history
          </span>
          <span className="p-1  text-xl mb-4 ">History</span>
        </li>
        <li className="flex justify-center my-2 hover:bg-gray-100  dark:hover:bg-gray-800">
          <span className="material-symbols-outlined p-1 font-thin">
            thumb_up
          </span>
          <span className="p-1 mr-3 text-xl mb-4">Liked</span>
        </li>
        <li className="flex justify-center my-2 hover:bg-gray-100  dark:hover:bg-gray-800">
          <span className="material-symbols-outlined p-1  font-thin">pace</span>
          <span className="p-1 mr-3 text-xl mb-4">Watch</span>
        </li>
        <li className="flex justify-center my-2 hover:bg-gray-100  dark:hover:bg-gray-800">
          <span className="material-symbols-outlined p-1 font-thin">
            settings
          </span>
          <span className="p-1 mr-2 text-xl mb-4">Settings</span>
        </li>
      </ul>
      <div className="border border-gray-100 my-4 "></div>
    </div>
  ) : null;
};

export default Sidebar;
