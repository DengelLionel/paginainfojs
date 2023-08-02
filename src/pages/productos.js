import Head from 'next/head'
import HeaderPrincipal2 from '@/components/Layouts/layauts_two/HeaderPrincipal2'
import Anuncio from '@/components/paginainfo/Anuncio'
import ConocePromocines from '@/components/paginainfo/ConocePromocines'
import Marcas from '@/components/paginainfo/Marcas'
import Footer from '@/components/paginainfo/Footer'
import MostrandoTodoProducto from '@/components/producto/MostrandoTodoProducto'
import Whatsapp from '@/components/paginainfo/Whatsapp'

const Productos = () => {
    return (
        <>
            <Head>
                <title>
                    Productos | Equipos Médicos de Alta Tecnología - NEXOMEDIC
                    Perú
                </title>
                <meta
                    name="description"
                    content="Explora nuestra amplia gama de productos en NEXOMEDIC. Ofrecemos equipos médicos de alta tecnología y soluciones avanzadas para profesionales de la salud en Perú. Descubre cómo nuestros productos pueden mejorar tu práctica médica."
                />
                <meta name="robots" content="index,follow" />
                <link
                    rel="canonical"
                    href={`https://www.nexomedic.com.pe/productos`}
                />
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

export default Productos
