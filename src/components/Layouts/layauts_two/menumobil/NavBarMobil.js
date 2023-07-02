import React, { useContext, useEffect, useState } from 'react'
import { PaginaContextValue } from '@/context/contextpaginaifno';
import { useDatosMenu } from "@/hooks/useDatosMenu";
import MenuItems from './MenuItems';
import IconMenuOne from '@/components/icons/IconMenuOne';
import IconBuscador from '@/components/icons/IconBuscador';
import Image from 'next/legacy/image';

const NavBarMobil = ({logo}) => {
    const { datos } = useDatosMenu();
    const {isOopen, setIsOopen}=useContext(PaginaContextValue)
    
    const [scrollPosition, setScrollPosition] = useState(0);

    const updateScrollPosition = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', updateScrollPosition);
      }
      return () => {
        if (typeof window !== 'undefined') {
          window.removeEventListener('scroll', updateScrollPosition);
        }
      }
    }, []);
    
    const navBackground = scrollPosition > 50 ? "bg-plomo" : "bg-transparent";

  return (
    <nav className={`h-[70px] shadow-md md:h-[70px] pt-[16px] pb-[16px] transition-all duration-[700ms] border-b-[1px] border-white border-opacity-25 fixed z-[9999] w-full lg:hidden ${navBackground}`}> 
    <div className="flex justify-between items-center mb-[10px]">
      <div className='relative w-[190px] h-[42px] ml-[16px]'> 
        <Image layout='fill' objectFit='cover' src={logo} alt="Descripción del logo" /> 
      </div>

      <div className="mr-[16px] flex flex-row gap-[22px] lg:hidden">
        <IconBuscador/>
       <IconMenuOne open={() => setIsOopen(!isOopen)}/>
       
      </div>
    </div>

    <div  className={`${isOopen ? 'block bg-blueTwo w-full' : 'hidden'} lg:block`}>
      <ul className=" list-none pr-[16px] pt-[20px] pb-[20px] pl-[16px]">
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