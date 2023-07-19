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
                <title>
                    Servicio Técnico | Mantenimiento y Reparación de Equipos
                    Médicos - NEXOMEDIC Perú
                </title>
                <meta
                    name="description"
                    content="Obtén asistencia de calidad con nuestro Servicio Técnico en NEXOMEDIC. Ofrecemos diagnóstico, mantenimiento preventivo y correctivo por profesionales altamente capacitados. Garantizamos el buen funcionamiento de tus equipos médicos con repuestos originales y cumpliendo los parámetros de calidad. Contáctanos hoy."
                />
                <meta name="robots" content="index,follow" />
                <link
                    rel="canonical"
                    href={`https://www.nexomedic.com.pe/servicio-tecnico`}
                />
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
