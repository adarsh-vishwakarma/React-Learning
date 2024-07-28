import React from "react";

function Card({ data, handleClick, index }) {
  const { name, image, artist, added } = data;
  return (
    <div className="w-60 h-28 m-4 bg-white flex gap-4 p-3 rounded-md relative">
      <div className="w-16 h-16 bg-orange-500 rounded-md overflow-hidden">
        <img className="h-full w-full object-cover" src={image} />
      </div>
      <div>
        <h1 className="text-xl font-semibold">{name}</h1>
        <h2 className="text-sm">{artist}</h2>
      </div>
      <button
        onClick={() => handleClick(index)}
        className={`py-2 px-3 absolute -bottom-3 ${
          added ? "bg-teal-600" : "bg-orange-500"
        } text-white text-xs rounded-full left-1/2 -translate-x-[50%]`}
      >
        {added === false ? "Add to Favourites" : "Added"}
      </button>
    </div>
  );
}

export default Card;
