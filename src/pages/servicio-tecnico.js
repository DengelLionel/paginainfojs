import React from 'react'
import { memo } from 'react'
import ConocePromocines from '@/components/paginainfo/ConocePromocines'
import Marcas from '@/components/paginainfo/Marcas'
import Footer from '@/components/paginainfo/Footer'

import Head from 'next/head'
import Anuncio from '@/components/paginainfo/Anuncio'
import HeaderPrincipal from '@/components/Layouts/layauts_two/HeaderPrincipal'
import ServicioTec from '@/components/serviciotec'
const servicioTecnico = () => {
    return (
        <>
            <Head>
                <title>Servicio técnicos</title>
            </Head>
            <Anuncio />
            <HeaderPrincipal />

            <main className="bg-white">
                <ServicioTec />
                <ConocePromocines />
                <Marcas />
                <Footer />
            </main>
        </>
    )
}

export default memo(servicioTecnico)
