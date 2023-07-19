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
                <title>
                    Contáctanos | NEXOMEDIC - Equipos y Soluciones Médicas en
                    Perú
                </title>
                <meta
                    name="description"
                    content="¿Tienes alguna consulta o necesitas asesoría con nuestros productos o servicios? Contáctanos en NEXOMEDIC a través de nuestro formulario en línea, llámanos al ( 51 ) 01 -758 3872 o envíanos un correo electrónico. Estamos aquí para ayudarte con todas tus necesidades de equipos médicos."
                />
                <meta name="robots" content="index,follow" />
                <link
                    rel="canonical"
                    href={`https://www.nexomedic.com.pe/contactanos`}
                />
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
