import React from 'react'
import EquiposMedicos from '../icons/EquiposMedicos'
import IconArrow from '../icons/IconArrow'
import EquiposLaboratorio from '../icons/EquiposLaboratorio'
import EquiposVeterinarios from '../icons/EquiposVeterinarios'
const NuestrasAreas = () => {
  return (
    <div className='flex flex-col items-center mt-[25px]'>
         <h2 className='text-negro font-extrabold md:text-[20px] mb-[20px] lg:text-[24px]'>Nuestras Áreas</h2>
         <div className='flex flex-wrap gap-[16px] justify-center items-center w-full'>
         <div className='w-[328px] h-[232px] rounded-md bg-blancoTwo flex flex-col justify-center items-center'>
            <EquiposMedicos/>
            <h2 className='text-negro text-[16px] font-semibold mt-[26px] mb-[14px] lg:text-[20px]'>EQUIPOS MEDICOS</h2>
            <button className='bg-blancoTwo border-[1px] border-blueOne w-[216px] h-[47px] text-blueOne text-[16px] rounded-full flex flex-row items-center justify-center font-semibold hover:bg-blancoOne hover:text-black gap-[30px]'>Ver productos <IconArrow fill={`#2F6AAD`}/></button>
         </div>
         <div className='w-[328px] h-[232px] rounded-md bg-blancoTwo flex flex-col justify-center items-center'>
            <EquiposLaboratorio/>
            <h2 className='text-negro text-[16px] font-semibold mt-[26px] mb-[14px] lg:text-[20px]'>EQUIPOS DE LABORATORIO</h2>
            <button className='bg-blancoTwo border-[1px] border-blueOne w-[216px] h-[47px] text-blueOne text-[16px] rounded-full flex flex-row items-center justify-center font-semibold hover:bg-blancoOne hover:text-black gap-[30px]'>Ver productos <IconArrow fill={`#2F6AAD`}/></button>
         </div>
         <div className='w-[328px] h-[232px] rounded-md bg-blancoTwo flex flex-col justify-center items-center'>
            <EquiposVeterinarios/>
            <h2 className='text-negro text-[16px] font-semibold mt-[26px] mb-[14px] lg:text-[20px]'>EQUIPOS VETERINARIOS</h2>
            <button className='bg-blancoTwo border-[1px] border-blueOne w-[216px] h-[47px] text-blueOne text-[16px] rounded-full flex flex-row items-center justify-center font-semibold hover:bg-blancoOne hover:text-black gap-[30px]'>Ver productos <IconArrow fill={`#2F6AAD`}/></button>
         </div>
         </div>
    </div>
  )
}

export default NuestrasAreas