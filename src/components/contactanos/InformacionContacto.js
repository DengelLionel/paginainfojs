import React from 'react'

const InformacionContacto = () => {
    return (
        <div className="text-blueOne rounded-lg shadow-lg lg:rounded-xl lg:shadow-xl w-full h-[200px] lg:h-[300px] lg:w-[300px] p-[10px] lg:p-[20px]">
            <h1 className="font-medium text-lg">CONTÁCTANOS</h1>
            <div>
                <ul>
                    <li>
                        {' '}
                        <span className="font-medium text-lg">Telf:</span>
                        <ul className="font-normal text-sm">
                            <li>( 51 ) 01 -758 3872</li>
                            <li>Cel: 999 780 748</li>
                        </ul>
                    </li>
                    <li>
                        {' '}
                        <span className="font-medium text-lg">Email:</span>
                        <ul className="font-normal text-sm">
                            <li>serviciotecnico@nexomedic.com.pe</li>
                            <li>ventas@nexomedic.com.pe</li>
                            <li>cotizaciones@nexomedic.com.pe</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-medium text-lg">Dirección:</span>
                        <ul className="font-normal text-sm">
                            <li>
                                Urb. Alameda del Pinar Mz j Lt 03- Comas Lima,
                                Perú
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default InformacionContacto
