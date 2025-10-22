import React from 'react'
import { BiCart, BiHome } from 'react-icons/bi'
import { GiHamburgerMenu} from 'react-icons/gi'

const Navigation = () => {
  return (
    <div className='flex justify-between'>
      <div><GiHamburgerMenu size={25}/></div>
      <div className='flex justify-between'>
        <div><BiHome size={25}/></div>
        <div><BiCart size={25}/></div>
      </div>
    </div>
  )
}

export default Navigation
