import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Filter from '../components/Filter'
import ProductDisplay from '../components/ProductDisplay'

const Landing = () => {
  const [filterData, setFilterData] = useState('')

  const handleFilterData =(data)=>{
    setFilterData(data)
  }
  
  return (
    <div className='padding-[10px] h-full m-2'>
      <Navigation/>
      <Filter childText = {handleFilterData}/>
      <ProductDisplay filterData = {filterData}/>
    </div>
  )
}

export default Landing
