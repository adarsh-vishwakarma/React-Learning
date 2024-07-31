import React from 'react';
import axios from 'axios';

const App = () => {
  const getProducts = () => {
    const api = 'https://fakestoreapi.com/products';

    axios
    .get(api)
    .then((Products) => {
      console.log(Products);
    })
    .catch((err) => {
      console.log(err);
    })
  }


  const postProducts = () => {
    const api = 'https://fakestoreapi.com/products';

    axios
    .post(api, {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
    "rate": 3.9,
    "count": 120
    }})
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }
  
  return (
    <div className='m-10 '>
      <button onClick={getProducts} className='px-5 py-2 bg-red-300 rounded'>Call Product API</button>
      <br/>
      <br/>
      <button onClick={postProducts} className='px-5 py-2 bg-red-300 rounded'>Add Product in API</button>

    </div>
  )
}

export default App
