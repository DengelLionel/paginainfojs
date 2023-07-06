import { memo } from 'react'
import Head from 'next/head'
import HeaderPrincipal from '@/components/Layouts/layauts_two/HeaderPrincipal'
import Anuncio from '@/components/paginainfo/Anuncio'
import ConocePromocines from '@/components/paginainfo/ConocePromocines'
import Marcas from '@/components/paginainfo/Marcas'
import Footer from '@/components/paginainfo/Footer'
import BannerGeneral from '@/components/paginainfo/BannerGeneral'
import Contactanos from '@/components/contactanos'
const contactanos = () => {
    return (
        <>
            <Head>
                <title>Contáctanos</title>
            </Head>
            <Anuncio />
            <HeaderPrincipal
                logo={
                    'https://res.cloudinary.com/darps1cta/image/upload/v1687493114/nexo/Nexo-Medic_Logo_dklapo.png'
                }
            />

            <BannerGeneral
                imagen={
                    'https://res.cloudinary.com/darps1cta/image/upload/v1687643443/nexo/medico-tecnico-laboratorio-analizando-evolucion-virus-tableta-digital-equipo-cientificos-que-llevan-cabo-desarrollo-vacunas-utilizando-alta-tecnologia-investigar-tratamiento-contra-pandem_hykvlk.jpg'
                }
                titulo={'banner'}
            />
            <main className="bg-blancoOne">
                <Contactanos />
                <ConocePromocines />
                <Marcas />
                <Footer />
            </main>
        </>
    )
}

export default memo(contactanos)