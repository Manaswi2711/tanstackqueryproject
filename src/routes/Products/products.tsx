
import { useSuspenseQuery } from '@tanstack/react-query'
import React from 'react'
import { productsQueryOptions } from './index'

function Products() {
    var {data:products} = useSuspenseQuery(productsQueryOptions)

  return (
     <div >
      <b><h1 className='text-3xl text-center'>PRODUCTS</h1></b> 
       <ul className='grid grid-cols-5 gap-6 border border-2 p-2 m-3'>
        {products.map((prod)=>(
            <li className='border border-2 border-gray-400 rounded-xl p-2 m-3 text-center bg-gray-200' key={prod.id}>
                   <img className="bg-gray-400 border rounded w-50 text-center     mx-auto" src={prod.thumbnail}/>
                    <b>{prod.title}</b>  
                    <p>price:${prod.price}</p>
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