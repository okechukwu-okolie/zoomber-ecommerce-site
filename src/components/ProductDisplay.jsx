 import { useEffect, useState,useMemo } from "react"
import Product from './Product'

const ProductDisplay = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)



    const ItemsPerPage = 10
    const totalPages = Math.ceil(products.length / ItemsPerPage)
    console.log('total pages',totalPages)

    const currentItems = useMemo(()=>{
      const startIndex = (currentPage - 1) * ItemsPerPage;
      const endIndex = startIndex + ItemsPerPage;
      return products.slice(startIndex,endIndex);
    },[currentPage,products])


    const prevHandler =()=>{
      setCurrentPage((prev)=>Math.max(1, prev -1))
    }

    const nextHandler = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };


      // Handler for direct page number clicks
      const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

      const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

   useEffect(()=>{
      
    const  product =async ()=>{
         try {
         const res = await fetch('https://api.escuelajs.co/api/v1/products')
         if(!res.ok){
                 throw Error(`error status:${res.status}, error message:${res.statusText}`)
         }
         const data =  await res.json()
         console.log(data.length)
         setProducts(data)
         
         } catch (err) {
             setError(err.message)
         } finally{
             setLoading(false)
         }
        }
         product()
    },[])

//error states
  if(error){
    return <div className='p-4 text-lg font-bold text-red-600'>Error: {error} ❌</div> 
  }

  //loading state
  if (loading) {
        return <div className='p-4 text-lg font-semibold'>Loading products... ⏳</div>
    }

  return (
    <>
    <div className='flex flex-wrap m-2 justify-evenly '>
        {currentItems.map((product)=> <Product key={Date.now} 
                                    title={product.title}
                                    price = {product.price}
                                    image = {product.images}
                                    />)}
      
     
    </div>
    <div className="flex justify-between w-3/4 m-auto mb-[20px]">
      <button onClick={prevHandler}
              disabled ={currentPage === 1}>
                &laquo; prev</button>


      {/* Page Numbers */}
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => goToPage(number)}
            className={`page-button ${number === currentPage ? 'active' : ''}`}
          >
            {number}
          </button>
        ))}

      <button onClick={nextHandler}
              disabled={currentPage === totalPages}>
                next &raquo;</button>
    </div>


    <div className="page-info">
        Page {currentPage} of {totalPages}
      </div>

    </>
  )
}

export default ProductDisplay
