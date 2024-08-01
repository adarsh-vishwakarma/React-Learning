import React, { useEffect, useState } from 'react';
import axios from "../Utils/axios";

const Show = () => {

  const [Products, setProducts] = useState([]);

  const getProducts = () => {
    const api = "/products";

    axios
      .get(api)
      .then((Products) => {
        // console.log(Products);
        setProducts(Products.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
  },[])
  return (
    <>
      <button onClick={getProducts} className="px-5 py-2 bg-red-300 rounded">
        Call Product API
      </button>

    <ul>
        {Products.length > 0 ? (
          Products.map((item, index) => {
            return <li className="p-5 bg-red-200 mb-2 rounded" key={index}>{item.title}</li>;
          })
        ) : (
          <h1>Loding...</h1>
        )}
      </ul>
    </>
    
  )
}

export default Show
