//use of state, filter, map

import React, { useState } from "react";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

function App() {
  const obj = [
    {
      name: "Challenger",
      image:
        "https://images.unsplash.com/photo-1553038492-209957b801d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29uZyUyMGltYWdlfGVufDB8fDB8fHww",
      artist: "Harsh",
      added: false,
    },
    {
      name: "One Day",
      image:
        "https://plus.unsplash.com/premium_photo-1671934974000-6e49d3309e50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNvbmclMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
      artist: "Sumit",
      added: false,
    },
    {
      name: "One Love",
      image:
        "https://media.istockphoto.com/id/701222982/photo/musical-instrument.webp?b=1&s=170667a&w=0&k=20&c=P3VccLIR18yee_qzxjgR1q-JKgeWcIRT9lCYZX8J8Io=",
      artist: "Amit",
      added: false,
    },
    {
      name: "Together",
      image:
        "https://media.istockphoto.com/id/1999851619/photo/photo-of-young-girl-listening-music-isolated-yellow-background-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=BjO5GEXrx8Up4_obGHsuzuV3QhZ9jrpGTTVRgLGR2aw=",
      artist: "Tripti",
      added: true,
    },
    {
      name: "Alone",
      image:
        "https://plus.unsplash.com/premium_photo-1681540549623-45168929205a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29uZyUyMGltYWdlfGVufDB8fDB8fHww",
      artist: "Adarsh",
      added: false,
    },
  ];

  const [songData, setSongData] = useState(obj);


  const handleClick = (index)=>{
    setSongData((prev)=>{
      return prev.map((item, itemIndex)=>{
        if(index === itemIndex) return {...item, added: !item.added};
        return item;
      })
    })
  }

  return (
    <div className="w-full h-screen bg-zinc-300">
      <Navbar data={songData}/>
      <div className="flex m-16 flex-wrap">
        {songData.map((item, index) => (
          <Card data={item} handleClick={handleClick} index={index} key={index}/>
        ))}
      </div>
    </div>
  );
}

export default App;
