import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [Products, setProducts] = useState([]);

  const getProducts = () => {
    const api = "https://fakestoreapi.com/products";

    axios
      .get(api)
      .then((Products) => {
        console.log(Products);
        setProducts(Products.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postProducts = () => {
    const api = "https://fakestoreapi.com/products";

    axios
      .post(api, {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: 3.9,
          count: 120,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(Products);
  return (
    <div className="m-10 ">
      <button onClick={getProducts} className="px-5 py-2 bg-red-300 rounded">
        Call Product API
      </button>
      <br />
      <br />
      <button onClick={postProducts} className="px-5 py-2 bg-red-300 rounded">
        Add Product in API
      </button>

      <hr className="my-10" />

      <ul>
        {Products.length > 0 ? (
          Products.map((item, index) => {
            return <li className="p-5 bg-red-300 mb-2 rounded" key={index}>{item.title}</li>;
          })
        ) : (
          <h1>Loding...</h1>
        )}
      </ul>
    </div>
  );
};

export default App;
