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
                <title>Clientes</title>
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
