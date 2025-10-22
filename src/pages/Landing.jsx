import React from 'react'
import Navigation from '../components/Navigation'
import Filter from '../components/Filter'
import ProductDisplay from '../components/ProductDisplay'

const Landing = () => {
  return (
    <div className='padding-[10px] h-full m-2'>
      <Navigation/>
      <Filter/>
      <ProductDisplay/>
    </div>
  )
}

export default Landing
