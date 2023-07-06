import React from 'react'
import FormularioContactanos from './FormularioContactanos'
import InformacionContacto from './InformacionContacto'
const Contactanos = () => {
    return (
        <div className="flex flex-col lg:flex-row">
            <FormularioContactanos />
            <InformacionContacto />
        </div>
    )
}

export default Contactanos
