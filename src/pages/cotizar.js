import { memo } from 'react'
import Cotizar from '@/components/cotizar'
import ConocePromocines from '@/components/paginainfo/ConocePromocines'
import Marcas from '@/components/paginainfo/Marcas'
import Footer from '@/components/paginainfo/Footer'
import Head from 'next/head'
import Anuncio from '@/components/paginainfo/Anuncio'
import HeaderPrincipal2 from '@/components/Layouts/layauts_two/HeaderPrincipal2'
import Whatsapp from '@/components/paginainfo/Whatsapp'
const cotizar = () => {
    return (
        <>
            <Head>Cotizar</Head>
            <Anuncio />
            <HeaderPrincipal2 />

            <main className="bg-white">
                <Cotizar />
                <Whatsapp />
                <ConocePromocines />
                <Marcas />
                <Footer />
            </main>
        </>
    )
}

export default memo(cotizar)
