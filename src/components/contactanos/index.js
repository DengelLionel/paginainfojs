import React from 'react'
import FormularioContactanos from './FormularioContactanos'
import InformacionContacto from './InformacionContacto'
const Contactanos = () => {
    return (
        <div className="w-full h-full bg-contactanos bg-no-repeat bg-center bg-cover">
            <div className="flex flex-col pt-[100px]  mb-[120px] items-center justify-center lg:justify-start lg:flex-row pb-[30px]">
                <FormularioContactanos />
                <InformacionContacto />
            </div>
        </div>
    )
}

export default Contactanos
