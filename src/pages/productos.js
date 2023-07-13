import { memo } from 'react'
import Head from 'next/head'
import HeaderPrincipal2 from '@/components/Layouts/layauts_two/HeaderPrincipal2'
import Anuncio from '@/components/paginainfo/Anuncio'
import ConocePromocines from '@/components/paginainfo/ConocePromocines'
import Marcas from '@/components/paginainfo/Marcas'
import Footer from '@/components/paginainfo/Footer'
import MostrandoTodoProducto from '@/components/producto/MostrandoTodoProducto'
import Whatsapp from '@/components/paginainfo/Whatsapp'
const productos = () => {
    return (
        <>
            <Head>
                <title>Productos</title>
            </Head>
            <Anuncio />
            <HeaderPrincipal2 />
            <MostrandoTodoProducto />

            <main className="bg-white">
                <Whatsapp />
                <ConocePromocines />
                <Marcas />
                <Footer />
            </main>
        </>
    )
}

export default memo(productos)
