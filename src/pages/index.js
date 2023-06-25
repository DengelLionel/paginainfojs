import Head from 'next/head'
import { useAuth } from '@/hooks/auth'
import HeaderPrincipal from '@/components/Layouts/layauts_two/HeaderPrincipal'
import Carousel from "nuka-carousel"
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

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Equipos medicos</title>
            </Head>
            <Anuncio/>
            <HeaderPrincipal  logo={'https://res.cloudinary.com/darps1cta/image/upload/v1687493114/nexo/Nexo-Medic_Logo_dklapo.png'}/>
            <Carousel className='lg:h-[500px] mb-0' adaptiveHeightAnimation={true} adaptiveHeight={true} defaultControlsConfig={{prevButtonText:<IconPrev/>,nextButtonText:<IconNext/>,containerClassName:'bg-blancoTransparente',prevButtonClassName:'rounded-full',nextButtonClassName:'rounded-full'}} wrapAround={true} autoplay={true}>
       
          <>

                 <Slider 
                 
                 imagen={'https://res.cloudinary.com/darps1cta/image/upload/v1676389141/samples/landscapes/beach-boat.jpg'}
                 titulo={'Ok laboratorio'}
                 />
                 </>
    
   
       
       
  </Carousel>

            <main className='bg-blancoOne'>
            <Servicios/>
  <Info/>    
  <NuestrasAreas/>  
  <ProductosDestacados/> 
  <ConocePromocines/> 
  <Marcas/>
  <Footer/>
            </main>
           
          
          
        </>
    )
}
