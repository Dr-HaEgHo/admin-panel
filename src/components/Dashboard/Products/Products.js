import axios from "axios";
import React, { useState, useEffect } from "react"


const Products = () => {
  
  const [Products, setProducts] = useState([])
  
  const prodApi = process.env.REACT_APP_PRODUCTS_URL;

    useEffect (() => {
        axios.get(prodApi)
        .then(res => setProducts(res.data.data))

    }, []);
    
    
    return( 

      <div>
        <div className='mt-6'>
            <h3 className='text-bkdeepblue font-semibold text-xl  '>Our Products</h3>
        </div>
        <div className='rounded-md mt-10 flex flex-wrap w-full justify-between'>
          
          {
            Products && Products.map((product) =>
              
              <div id="card" className="w-[240px] h-[240px] mb-5 rounded shadow-sm overflow-hidden  bg-white relative ">
                <img className='rounded h-full object-cover' src={product.image} alt='products.jpg'></img>
                <div id="name-tag" className=" flex absolute w-[90%] bg-bkwhite/100 p-1 overflow-hidden rounded shadow top-[20px] left-1/2 transform -translate-x-1/2 duration-200">
                  <h3 className="w-[65%] text-bkdeepblue text-sm font-bold ">{product.name}</h3>
                  <p className="w-[30%] text-bkdeepblue text-sm ">${ product.price }</p>
                </div>
                <div id="tag" className=" h-full absolute top-[100%] left-1/2 transform -translate-x-1/2 z-10 w-[90%] bg-white/80 text-bkdeepblue rounded p-2 duration-100 ">
                  <h1 className="font-bold text-sm mt-2">Product Details</h1>
                  <h2 className="text-xs">Name: {product.name}</h2>
                  <p className="text-xs" >Net-Price: {product.net_price}</p>
                  <p className="text-xs">Price: {product.price}</p>
                  <p className="text-xs">V.A.T: {product.taxes}</p>
                </div>
              </div>
            )
          }
        </div>
      </div>
    )
}

export default Products