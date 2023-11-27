import React, { useEffect, useState } from "react";
// import Hamburger from "../assets/hamburger.png";
import Hamburger from "./Hamburger";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../store/reducers/appToggle";
import { YT_SUGGESTIONS } from "../helper/constant";
import { cacheResults } from "../store/reducers/searchSlice";
import { searchText } from "../store/reducers/videoInfo";
import img from "../assets/Cartoon_Pic.png";
import { Link } from "react-router-dom";  
import Switcher from "./Switcher";
import plethora from "../assets/Logo.png";
import Microphone from "./Microphone";

export let live_suggestions="";
//header simply integrates all the components
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestion] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search); //subscribing to store.serach slice of the redux store
  const dispatch = useDispatch();
  

  useEffect(() => {
    
    const timer = setTimeout(() => {
      //if our search bar is not emplty then show suggestions
      //we have used setTimeout for debouncing purpose
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSuggestions();
      }
    }, 200);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [searchQuery]);

  const getSuggestions = async () => {
    const data = await fetch(YT_SUGGESTIONS + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
    dispatch(
      // caching the results of search to prevent re-calling of api when the same video is searched again 
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  const updateSearch=(val)=>{
    setSearchQuery(val);
  }
  return (
    <div
      className={
        "flex justify-between fixed w-full h-16 z-50 bg-white  dark:bg-black dark:text-white"
      }
    >
      <div className="flex">
       
        <div
        onClick={() => dispatch(toggle())}>
        <Hamburger
        />
        </div>
        <Link to="/"> 
          <img alt="yt-logo" src={plethora} className="h-10 mt-3 ml-5 rounded-lg " />
        </Link>
      </div>
      <div className=" flex">
        <div className="w-[500px] border border-gray-200 rounded-l-full p-2 my-3 shadow-md h-10  border-r-0 flex  dark:shadow-neutral-500">
          <input
            type="text"
            className="w-[500px] outline-0 px-3 dark:bg-black dark:text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e)=>e.key==="Enter"?dispatch(searchText(searchQuery), setShowSuggestions(false)):0}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}  
            placeholder="Search"
          />
          {searchQuery !== "" && (
            <span
              className="material-symbols-outlined cursor-pointer hover:bg-gray-200 rounded-full  dark:hover:bg-gray-700"
              onClick={() => setSearchQuery("")}
            >
              close
            </span>
          )}
        </div>

        <div>
          <Link to={"/results?search_query=" + searchQuery}>
            <button
              type="submit"
              className="border border-gray-300 rounded-r-full my-3  p-2 bg-gray-100 w-14 h-10 shadow-md dark:bg-black dark:text-white  dark:shadow-neutral-500"
            >
              <span
                className="material-symbols-outlined font-light"
                onClick={() =>{dispatch(searchText(searchQuery), setShowSuggestions(false))

               
                }
                }
              >
                search
              </span>
            </button>
          </Link>
        </div>

          {/* if showSuggestions is true then below is conditional rendering  */}
        {showSuggestions && (
          <div className="absolute bg-white w-[500px] my-14 py-1 px-3 shadow-lg rounded-lg dark:bg-black dark:text-white  dark:shadow-slate-400">
            <ul>
              <Link to={"/results?search_query=" + searchQuery}>
                {suggestions.map((s) => (
                  <div
                    className="flex hover:bg-gray-200 dark:hover:bg-gray-800"
                    key={s}
                    onClick={() => {
                      setSearchQuery(s);
                      setShowSuggestions(false);
                      dispatch(searchText(searchQuery));
                    }}
                  >
                    <span className="material-symbols-outlined py-1">
                      search
                    </span>

                    <li className="list-none py-1 px-2">{s}</li>
                  </div>
                ))}
              </Link>
            </ul>
          </div>
        )}
        
          <Microphone searchText={searchText} updateSearch={updateSearch}/>
        
      </div>
      <Switcher />
      <div className="flex">
        <div>
         
          <span className="material-symbols-outlined font-thin m-4  hover:bg-red-800 rounded-full p-1  dark:hover:bg-red-800 hover:cursor-pointer">
            notifications
          </span>
        </div>
        <img
          alt="user logo font-thin "
          src={img}
          className="h-11 p-2 m-2 rounded-xl"
        />
      </div>
    </div>
  );
};

export default Header;
