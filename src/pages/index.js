import Head from 'next/head'
import HeaderPrincipal from '@/components/Layouts/layauts_two/HeaderPrincipal'
import Carousel from 'nuka-carousel'
import Anuncio from '@/components/paginainfo/Anuncio'
import Slider from '@/components/paginainfo/Slider'
import IconPrev from '@/components/icons/IconPrev'
import IconNext from '@/components/icons/IconNext'
import Servicios from '@/components/paginainfo/Servicios'
import Info from '@/components/paginainfo/Info'
import NuestrasAreas from '@/components/paginainfo/NuestrasAreas'
import ProductosDestacados from '@/components/paginainfo/ProductosDestacados'
import ConocePromocines from '@/components/paginainfo/ConocePromocines'
import Marcas from '@/components/paginainfo/Marcas'
import Footer from '@/components/paginainfo/Footer'
import { useDatosSlider } from '@/hooks/useDatosSlider'
import Whatsapp from '@/components/paginainfo/Whatsapp'
export default function Home() {
    const { datos } = useDatosSlider()

    return (
        <>
            <Head>
                <title>Equipos medicos</title>
            </Head>
            <Anuncio />
            <HeaderPrincipal />
            {datos?.length > 0 && (
                <Carousel
                    adaptiveHeightAnimation={true}
                    adaptiveHeight={true}
                    defaultControlsConfig={{
                        prevButtonText: <IconPrev />,
                        nextButtonText: <IconNext />,
                        containerClassName: 'bg-blancoTransparente',
                        prevButtonClassName: 'rounded-full',
                        nextButtonClassName: 'rounded-full',
                    }}
                    wrapAround={true}
                    autoplay={true}>
                    {datos?.map(imagen => (
                        <div key={imagen.id}>
                            <Slider
                                imagen_mobil={imagen.imagen_mobil}
                                titulo={imagen.titulo}
                                mobile={true}
                            />
                            <Slider
                                imagen_desktop={imagen.imagen_desktop}
                                titulo={imagen.titulo}
                                mobile={false}
                            />
                        </div>
                    ))}
                </Carousel>
            )}

            <main className="bg-white">
                <Servicios />
                <Info />
                <NuestrasAreas />
                <ProductosDestacados />
                <Whatsapp />
                <ConocePromocines />
                <Marcas />
                <Footer />
            </main>
        </>
    )
}
