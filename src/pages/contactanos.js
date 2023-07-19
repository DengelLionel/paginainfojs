import { memo } from 'react'
import Head from 'next/head'
import HeaderPrincipal2 from '@/components/Layouts/layauts_two/HeaderPrincipal2'
import Anuncio from '@/components/paginainfo/Anuncio'
import ConocePromocines from '@/components/paginainfo/ConocePromocines'
import Marcas from '@/components/paginainfo/Marcas'
import Footer from '@/components/paginainfo/Footer'
import Contactanos from '@/components/contactanos'
import Whatsapp from '@/components/paginainfo/Whatsapp'
const contactanos = () => {
    return (
        <>
            <Head>
                <title>Contáctanos</title>
            </Head>
            <Anuncio />
            <HeaderPrincipal2 />

            <main>
                <Contactanos />
                <Whatsapp />
                <ConocePromocines />
                <Marcas />
                <Footer />
            </main>
        </>
    )
}

export default memo(contactanos)
