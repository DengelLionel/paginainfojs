import React from 'react'
import FormularioContactanos from './FormularioContactanos'
import InformacionContacto from './InformacionContacto'
const Contactanos = () => {
    return (
        <div className="flex flex-col items-center justify-center lg:flex-row pb-[30px]">
            <FormularioContactanos />
            <InformacionContacto />
        </div>
    )
}

export default Contactanos
