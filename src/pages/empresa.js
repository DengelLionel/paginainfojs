import { memo } from 'react'
import SobreNosotros from '@/components/sobrenosotros'
import Head from 'next/head'
import HeaderPrincipal from '@/components/Layouts/layauts_two/HeaderPrincipal'
import Anuncio from '@/components/paginainfo/Anuncio'
import ConocePromocines from '@/components/paginainfo/ConocePromocines'
import Marcas from '@/components/paginainfo/Marcas'
import Footer from '@/components/paginainfo/Footer'
const empresa = () => {
    return (
        <>
            <Head>
                <title>Empresa</title>
            </Head>
            <Anuncio />
            <HeaderPrincipal />
            <SobreNosotros />

            <main className="bg-blancoOne">
                <ConocePromocines />
                <Marcas />
                <Footer />
            </main>
        </>
    )
}

export default memo(empresa)
