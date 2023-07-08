import { memo } from 'react'
import Cotizar from '@/components/cotizar'
import ConocePromocines from '@/components/paginainfo/ConocePromocines'
import Marcas from '@/components/paginainfo/Marcas'
import Footer from '@/components/paginainfo/Footer'
import Head from 'next/head'
import Anuncio from '@/components/paginainfo/Anuncio'
import HeaderPrincipal from '@/components/Layouts/layauts_two/HeaderPrincipal'
import BannerGeneral from '@/components/paginainfo/BannerGeneral'
import Whatsapp from '@/components/paginainfo/Whatsapp'
const cotizar = () => {
    return (
        <>
            <Head>Cotizar</Head>
            <Anuncio />
            <HeaderPrincipal />
            <BannerGeneral
                imagen={
                    'https://res.cloudinary.com/darps1cta/image/upload/v1687643443/nexo/medico-tecnico-laboratorio-analizando-evolucion-virus-tableta-digital-equipo-cientificos-que-llevan-cabo-desarrollo-vacunas-utilizando-alta-tecnologia-investigar-tratamiento-contra-pandem_hykvlk.jpg'
                }
                titulo={'banner'}
            />
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
