import { memo } from 'react'
import Head from 'next/head'
import HeaderPrincipal2 from '@/components/Layouts/layauts_two/HeaderPrincipal2'
import Anuncio from '@/components/paginainfo/Anuncio'
import ConocePromocines from '@/components/paginainfo/ConocePromocines'
import Marcas from '@/components/paginainfo/Marcas'
import Footer from '@/components/paginainfo/Footer'

import Whatsapp from '@/components/paginainfo/Whatsapp'
import TodoSearch from '@/components/producto/TodoSearch'
const search = () => {
    return (
        <>
            <Head>
                <title>
                    Buscando | Equipo medico | Laboratorio | Veterinario
                </title>
                <meta
                    name="description"
                    content="En NEXOMEDIC encontraras el equipo medico que tanto desea."
                />
                <meta name="robots" content="index,follow" />
                <link
                    rel="canonical"
                    href={`https://www.nexomedic.com.pe/search`}
                />
            </Head>
            <Anuncio />
            <HeaderPrincipal2 />
            <TodoSearch />

            <main className="bg-white">
                <Whatsapp />
                <ConocePromocines />
                <Marcas />
                <Footer />
            </main>
        </>
    )
}

export default memo(search)
