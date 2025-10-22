import { useEffect, useState } from "react"
import Product from './Product'

const ProductDisplay = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
   useEffect(()=>{
      
    const  product =async ()=>{
         try {
         const res = await fetch('https://api.escuelajs.co/api/v1/products')
         if(!res.ok){
                 throw Error(`error status:${res.status}, error message:${res.statusText}`)
         }
         const data =  await res.json()
         // console.log(data)
         setProducts(data)
         
         } catch (err) {
             setError(err.message)
         } finally{
             setLoading(false)
         }
        }
         product()
    },[])


  if(error){
    return <div className='p-4 text-lg font-bold text-red-600'>Error: {error} ❌</div> 
  }

  if (loading) {
        return <div className='p-4 text-lg font-semibold'>Loading products... ⏳</div>
    }

  return (
    <div className='flex flex-wrap m-2 justify-evenly '>
        {products.map((product)=> <Product key={Date.now} 
                                    title={product.title}
                                    price = {product.price}
                                    image = {product.images}
                                    />)}
      
     
    </div>
  )
}

export default ProductDisplay
