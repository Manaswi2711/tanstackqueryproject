
import { createFileRoute } from '@tanstack/react-router'
import { queryOptions } from '@tanstack/react-query'
import Products from './products'


export const productsQueryOptions = queryOptions({
    queryKey:['products'],
    queryFn:async ()=>{
        var res = await fetch("https://dummyjson.com/products")
        var data = await res.json()
        return data.products as Array<{ id: number; title: string; price: number,thumbnail:string,rating:number }>;
    }
})

export const Route = createFileRoute('/Products/')({
  loader: ({ context: { queryClient} }) => {
    return queryClient.ensureQueryData(productsQueryOptions)
  },
  component:Products,
})
