import React, { useState } from 'react'
import { BiCart, BiCategory, BiHome } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg'
import { GiHamburgerMenu} from 'react-icons/gi'

const Navigation = () => {
  const [changeHamburger, setChangeHamburger] = useState(false)

  const handleChangeHamburger = ()=>{
    setChangeHamburger(!changeHamburger)
  }
  return (
    <div className='flex justify-between sticky top-0 z-20 bg-white'>
      <div className='cursor-pointer'>{changeHamburger ? <CgClose size={25} onClick={handleChangeHamburger}/> : <GiHamburgerMenu size={25} onClick={handleChangeHamburger}/>}</div>
      <div className='flex justify-between'>
        <div className='cursor-pointer'><BiHome size={25}/></div>
        <div className='cursor-pointer'><BiCart size={25}/></div>
      </div>
      <div className={changeHamburger ?'absolute top-4 left-[20px] z-50  cursor-pointer bg-slate-200 opacity-70 w-3/7':'absolute top-0 left-[30px] z-50 hidden'}>
        <ul >
          <li className='border-b-2 font-bold px-3'>Category </li>
          <li className='border-b-2 mt-[18px] font-bold px-3'>Pricing</li>
          <li className='border-b-2 mt-[18px] font-bold px-3'>Rating</li>
          <li className='border-b-2 mt-[18px] font-bold px-3'>Discount/Onsale</li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation
