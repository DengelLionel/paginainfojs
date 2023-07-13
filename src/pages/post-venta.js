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
                <title>Post venta</title>
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
