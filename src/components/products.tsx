import React from 'react'
import { useEffect } from 'react'
function Products() {
  var [products,setProducts] =React.useState([])
  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      setProducts(data.products)
    })
  },[])
  return (
    <div >
      <b><h1 className='text-3xl text-center'>PRODUCTS</h1></b> 
       <ul className='grid grid-cols-6 gap-6 border border-2 p-2 m-3'>
        {products.map((prod)=>(
            <li className='border border-2 border-gray-400 rounded-xl p-2 m-3 text-center bg-gray-200' key={prod.id}>
                   <img className="bg-gray-400 border rounded w-50 text-center mx-auto" src={prod.thumbnail}/>
                    <b>{prod.title}</b>  
                   <p>rating:{prod.rating}</p>
            </li>
             
          )
          )
        }
       </ul>
    </div>
  )
}

export default Products
