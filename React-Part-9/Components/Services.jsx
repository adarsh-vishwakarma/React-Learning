import React, { useEffect, useState } from "react";

const Services = () => {
  const [first, setFirst] = useState("This is normal data");
  const [second, setSecond] = useState("This is very large data");

  useEffect(() => {
    console.log("Service component is created");
    return () => {
      console.log("Service component is deleted");
    };
  },[second]);

  return (
    <div>
      <h1>{first}</h1>
      <button
        onClick={() => setFirst("Normal data has been updated")}
        className="px-5 py-2 rounded bg-red-200 my-5"
      >
        Change Normal Data
      </button>
      <h2>{second}</h2>
      <button
        onClick={() => setSecond("Large data has been updated")}
        className="px-5 py-2 rounded bg-red-200 my-5"
      >
        Change Large Data
      </button>
    </div>
  );
};

export default Services;
