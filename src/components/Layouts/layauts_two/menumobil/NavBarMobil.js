import React, { useContext} from 'react'
import { PaginaContextValue } from '@/context/contextpaginaifno';
import { useDatosMenu } from "@/hooks/useDatosMenu";
import MenuItems from './MenuItems';
import IconMenuOne from '@/components/icons/IconMenuOne';
const NavBarMobil = ({logo}) => {
    const { datos } = useDatosMenu();
    const {isOopen, setIsOopen}=useContext(PaginaContextValue)
    
  return (
    <nav   className="bg-white h-[60px] bg-blue-700 pt-[16px] pb-[16px] shadow  md:flex md:justify-between md:items-center"> 
    <div className="flex justify-between items-center">
      <div className='ml-[16px]'> 
        <img src={logo} alt="Descripción del logo" /> 
      </div>

      <div className="mr-[16px] md:hidden">
       <IconMenuOne open={() => setIsOopen(!isOopen)}/>
       
      </div>
    </div>

    <div  className={`${isOopen ? 'block bg-blue-700 w-full' : 'hidden'} md:block`}>
      <ul className="md:flex list-none p-[16px]">
        {
          datos?.map((menu, index) => {
            const depthLevel = 0
            return (
              <MenuItems items={menu} key={index} depthLevel={depthLevel} />
            )
          })
        }
      </ul>
    </div>
  </nav>
  )
}

export default NavBarMobil