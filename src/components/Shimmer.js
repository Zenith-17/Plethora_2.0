import React from "react";
//simple shimmer for loading 
const number=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const Shimmer = () => {
  return (
    <div className="p-1 mx-14 my-5 shadow-sm  flex flex-wrap ">
      {number
        .map((e) => (
          <div
            key={e}
            // className="rounded-xl w-80 bg-gray-200 h-80 m-2 dark:bg-gray-800"
            class="[...] isolate overflow-hidden shadow-xl shadow-black/5 before:border-t before:border-rose-100/10"
            />
        ))}
    </div>
  );
};

export default Shimmer;
