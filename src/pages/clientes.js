import { memo } from 'react'
import Head from 'next/head'
import HeaderPrincipal2 from '@/components/Layouts/layauts_two/HeaderPrincipal2'
import Anuncio from '@/components/paginainfo/Anuncio'
import ConocePromocines from '@/components/paginainfo/ConocePromocines'
import Marcas from '@/components/paginainfo/Marcas'
import Footer from '@/components/paginainfo/Footer'
import TodoCliente from '@/components/clientes'
import Whatsapp from '@/components/paginainfo/Whatsapp'
const clientes = () => {
    return (
        <>
            <Head>
                <title>
                    Clientes | Trabajamos con Marcas Certificadas de Alta
                    Calidad - NEXOMEDIC Perú
                </title>
                <meta
                    name="description"
                    content="En NEXOMEDIC, trabajamos con las mejores marcas del mercado para ofrecer a nuestros clientes productos de alta calidad con certificación ISO, FDA, CE, a los mejores precios. Descubre cómo nuestras soluciones de alta calidad pueden beneficiar a tu práctica médica"
                />
                <meta name="robots" content="index,follow" />
                <link
                    rel="canonical"
                    href={`https://www.nexomedic.com.pe/clientes`}
                />
            </Head>
            <Anuncio />
            <HeaderPrincipal2 />

            <TodoCliente />

            <main className="bg-blancoOne">
                <Whatsapp />
                <ConocePromocines />
                <Marcas />
                <Footer />
            </main>
        </>
    )
}

export default memo(clientes)
