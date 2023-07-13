import React from 'react'
import { memo } from 'react'
import ConocePromocines from '@/components/paginainfo/ConocePromocines'
import Marcas from '@/components/paginainfo/Marcas'
import Footer from '@/components/paginainfo/Footer'
import Whatsapp from '@/components/paginainfo/Whatsapp'
import Head from 'next/head'
import Anuncio from '@/components/paginainfo/Anuncio'
import HeaderPrincipal2 from '@/components/Layouts/layauts_two/HeaderPrincipal2'
import ServicioTec from '@/components/serviciotec'
const servicioTecnico = () => {
    return (
        <>
            <Head>
                <title>Servicio técnicos</title>
            </Head>
            <Anuncio />
            <HeaderPrincipal2 />
            <ServicioTec />
            <main className="bg-white">
                <Whatsapp />
                <ConocePromocines />
                <Marcas />
                <Footer />
            </main>
        </>
    )
}

export default memo(servicioTecnico)
