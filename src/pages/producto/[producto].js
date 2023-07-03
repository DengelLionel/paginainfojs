import Head from 'next/head'
import HeaderPrincipal from '@/components/Layouts/layauts_two/HeaderPrincipal'
import Anuncio from '@/components/paginainfo/Anuncio'
import ConocePromocines from '@/components/paginainfo/ConocePromocines'
import Marcas from '@/components/paginainfo/Marcas'
import Footer from '@/components/paginainfo/Footer'
import PaginaProducto from '@/components/producto'
import { useRouter } from 'next/router'
import { useState, useEffect, memo } from 'react'
import useSWR from 'swr'
import axios from '@/lib/axios'
const Producto = () => {
    const [datos, setDatos] = useState(null)
    const data = useSWR('/api/producto_destacado', () =>
        axios.get('/api/producto_destacado').then(res => res.data),
    )
    const dato = data.data
    const router = useRouter()
    const { producto } = router.query

    let interval
    useEffect(() => {
        interval = setInterval(() => {
            setDatos(
                dato?.filter(
                    destacado => producto === destacado.meta_title_link,
                ),
            )
        }, 0.001)

        return () => clearInterval(interval)
    }, [interval, producto, datos, dato])

    return (
        <>
            <Head>
                <title>
                    {datos?.length > 0 ? datos?.[0]?.meta_title : 'Cargando...'}
                </title>
            </Head>
            <Anuncio />
            <HeaderPrincipal
                logo={
                    'https://res.cloudinary.com/darps1cta/image/upload/v1687493114/nexo/Nexo-Medic_Logo_dklapo.png'
                }
            />
            <PaginaProducto datosProducto={datos} />

            <main className="bg-blancoOne">
                <ConocePromocines />
                <Marcas />
                <Footer />
            </main>
        </>
    )
}
export default memo(Producto)
