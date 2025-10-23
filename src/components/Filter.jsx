import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'

const Filter = ({childText}) => {
  
  const [filterText, setFilterText] = useState('')

  const handleFilterText =(e)=>{
      setFilterText(e.target.value)
      childText(filterText)
  }
  console.log(filterText)
  return (
    <div className='flex items-center bg-slate-200 mt-1 h-[30px] rounded px-3'>
      <input  type="text"
              value={filterText}
              onChange={handleFilterText}
              placeholder='filter by category and name'
              className='w-full bg-slate-200 outline-none px-2 placeholder:opacity-40 '/>
              <BiSearch size={20}/>
    </div>
  )
}

export default Filter
