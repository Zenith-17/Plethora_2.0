import React, { useEffect, useState } from "react";
import { SEARCH_TEXT_API } from "../helper/constant";
import Card from "./Card.js";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addDetails } from "../store/reducers/videoInfo.js";
import Shimmer from "./Shimmer.js";

const FilteredResults = () => {
  const { text } = useSelector((store) => store.filterText); //subscribing to filterText slice of the redux store
  const [videos, setVideos] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => { //called each time when text changes
    fetchSearch();
  }, [text]);

  const fetchSearch = async () => {
    const data = await fetch(SEARCH_TEXT_API + text);
    const json = await data.json();
    setVideos(json?.items);
  };
  return videos.length === 0 ? 
    (<Shimmer />)
   : (
    <div className="flex flex-wrap justify-center ">
      {videos?.map((video) => (
        <Link
          to={"/watch?v=" + video?.id?.videoId}
          //onClick dispatching video id to pass the video argument in url and play the video
          onClick={() => dispatch(addDetails(video?.id?.videoId))}
          key={video?.id?.videoId}
          value={video?.id?.videoId}
        >
          {/* simply display the video card  */}
          <Card videos={video} />
        </Link>
      ))}
    </div>
  );
};

export default FilteredResults;
