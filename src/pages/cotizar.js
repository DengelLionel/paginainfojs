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
            <Head>
                <title>
                    Cotizar | Solicita una Cotización de Nuestros Productos -
                    NEXOMEDIC Perú
                </title>
                <meta
                    name="description"
                    content="Solicita una cotización rápida y fácilmente con NEXOMEDIC. Completa nuestro formulario y un ejecutivo comercial se comunicará contigo para brindarte la asistencia necesaria. Descubre cómo nuestros productos de alta tecnología pueden beneficiar a tu práctica médica."
                />
                <meta name="robots" content="index,follow" />
                <link
                    rel="canonical"
                    href={`https://www.nexomedic.com.pe/cotizar`}
                />
            </Head>
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
