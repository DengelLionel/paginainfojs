import { memo } from 'react'
import SobreNosotros from '@/components/sobrenosotros'
import Head from 'next/head'
import HeaderPrincipal from '@/components/Layouts/layauts_two/HeaderPrincipal'
import Anuncio from '@/components/paginainfo/Anuncio'
import ConocePromocines from '@/components/paginainfo/ConocePromocines'
import Marcas from '@/components/paginainfo/Marcas'
import Footer from '@/components/paginainfo/Footer'
import Whatsapp from '@/components/paginainfo/Whatsapp'
const empresa = () => {
    return (
        <>
            <Head>
                <title>
                    NEXOMEDIC: Soluciones Tecnológicas y Equipos Médicos de
                    Calidad | Perú
                </title>
                <meta
                    name="description"
                    content="En NEXOMEDIC, somos más que una empresa de equipamiento médico. Proveemos soluciones tecnológicas avanzadas y un servicio de postventa de calidad en Perú. Nuestro compromiso es agregar valor a tu práctica profesional con productos de alta tecnología, capacitación y soporte técnico personalizado."
                />
                <meta name="robots" content="index,follow" />
                <link
                    rel="canonical"
                    href={`https://www.nexomedic.com.pe/empresa`}
                />
            </Head>
            <Anuncio />
            <HeaderPrincipal />
            <SobreNosotros />

            <main className="bg-blancoOne">
                <ConocePromocines />
                <Whatsapp />
                <Marcas />
                <Footer />
            </main>
        </>
    )
}

export default memo(empresa)
