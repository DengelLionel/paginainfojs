import React from 'react'
import {memo} from 'react'
import NavBar from './NavBar'
import NavBarMobil from './menumobil/NavBarMobil'



const HeaderPrincipal = ({logo}) => {

  return (
    <div >
    {/* movile and tablet */}
      <div className='lg:hidden'>
      <NavBarMobil logo={logo} />
       
      
      </div>
      {/* desktop */}
      <div className='hidden md:block'>
      <NavBar logo={logo}  /> 
    
      
      </div>

  </div>
  )
}

export default memo(HeaderPrincipal)