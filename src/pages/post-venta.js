import { memo } from 'react'
import Head from 'next/head'
import HeaderPrincipal2 from '@/components/Layouts/layauts_two/HeaderPrincipal2'
import Anuncio from '@/components/paginainfo/Anuncio'
import ConocePromocines from '@/components/paginainfo/ConocePromocines'
import Marcas from '@/components/paginainfo/Marcas'
import Footer from '@/components/paginainfo/Footer'
import PostVenta from '@/components/postventa'
import Whatsapp from '@/components/paginainfo/Whatsapp'
const postventa = () => {
    return (
        <>
            <Head>
                <title>
                    Postventa | Compromiso y Asesoría Personalizada - NEXOMEDIC
                    Perú
                </title>
                <meta
                    name="description"
                    content="Nuestro compromiso con los clientes va más allá de la entrega del producto. En NEXOMEDIC, ofrecemos un servicio de postventa que incluye asesoría personalizada para resolver cualquier inconveniente con nuestros equipos médicos. Completa nuestro formulario y nuestro personal responderá todas tus dudas."
                />
                <meta name="robots" content="index,follow" />
                <link
                    rel="canonical"
                    href={`https://www.nexomedic.com.pe/postventa`}
                />
            </Head>
            <Anuncio />
            <HeaderPrincipal2 />
            <PostVenta />

            <main className="bg-white">
                <Whatsapp />
                <ConocePromocines />
                <Marcas />
                <Footer />
            </main>
        </>
    )
}

export default memo(postventa)
