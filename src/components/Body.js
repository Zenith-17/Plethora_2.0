import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import ButtonList from "./ButtonList";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Body = () => {
  const list = [
    "T-series",
    "Music",
    "Trending",
    "Cricket",
    "Live",
    "Sports",
    "Gaming",
    "Computer Science",
    "Trailers",
  ];

  const list1 = [
    "Mixes",
    "Jukebox",
    "Kedarnath",
    "Arijith Singh",
    "CSS",
    "Tourist destination",
    "Lionel Messi",
    "India national cricket team ",
  ];

  return (
    <div className=" w-full dark:bg-black">
      <Header />
      <div className="flex">
        <div className=" sticky z-40">
        <Sidebar/>
        </div>
        <div className="absolute dark:bg-black">
          <Carousel
            infiniteLoop
            showIndicators={false}
            showThumbs={false}
            className=" mt-20 h-12"
          >
            <ButtonList list={list} />
            <ButtonList list={list1} />
          </Carousel>
          {/*  the Outlet component is used to render child components based on the current route. It serves as a placeholder where the components corresponding to the matched routes will be displayed.
The Outlet component is typically used within the route hierarchy, where it acts as a container for the nested child routes. When the application navigates to a specific route, the Outlet component will render the child component associated with that route. */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
