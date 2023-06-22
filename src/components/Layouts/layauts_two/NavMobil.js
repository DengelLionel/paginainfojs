import React, {memo,useContext,useState,useEffect} from 'react';
import IconArrowBack from '../../icons/IconArrowBack';
import { PaginaContextValue } from '@/context/contextpaginaifno';
import { useDatosMenu } from '@/hooks/useDatosMenu';
import Link from 'next/link';
const NavMobil = () => {


 const {setOpenSubNav,capturarMenu,setCapturarMenu,setOpenMenuDesktop,openMenuDesktop,setOpenSubsubNav,capturarSubMenu,setCapturarSubMenu,openSubsubNav,openMenu,openSubNav}=useContext(PaginaContextValue)
   
const [datosCapturados,setDatosCapturados]=useState(null)
const [datosCapturadosSubsub,setDatosCapturadosSubsub]=useState(null)
const {datos}=useDatosMenu()

  return (
    <nav className={`bg-red-400  w-full h-full rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-xl z-[40] transition-all duration-700 delay-75 mt-[20px] ${openMenu === true ? 'skew-y-0 opacity-100  visible' : 'skew-y-3 translate-y-1.5 opacity-0 overflow-hidden invisible'} lg:hidden xl:hidden`}>
      <div className='flex flex-col gap-[8px] justify-center items-start tracking-[0.015em] font-semibold p-[16px]'>
        {datos?.map((menu,index)=>(
           <Link key={index} href={menu.enlace}>{menu.nombre}</Link>
        ))}
      </div>

    </nav>
  )
}

export default memo(NavMobil);