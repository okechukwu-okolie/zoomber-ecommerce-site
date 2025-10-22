import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Filter = () => {
  return (
    <div className='flex items-center bg-slate-200 mt-1 h-[30px] rounded px-3'>
      <input type="text"className='w-full bg-slate-200 outline-none px-2 '/><BiSearch size={20}/>
    </div>
  )
}

export default Filter
