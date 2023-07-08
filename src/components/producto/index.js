import { memo } from 'react'
import BannerGeneral from '@/components/paginainfo/BannerGeneral'
import CarruselProducto from './CarruselProducto'
import InfoProducto from './InfoProducto'
import Descripcion from './Descripcion'
import ListaProductos from './ListaProductos'
/* import ProductosRelacionados from './ProductosRelacionados' */

const PaginaProducto = ({ datosProducto }) => {
    const OPTION = {}
    const Imagenes = datosProducto?.map(imagen => imagen.imagenes_producto)
    /*   const [idproductoRelacionado,setIdproductoRelacionado]=useState(null) */

    /*   useEffect(()=>{
        if (datosProducto && datosProducto.length > 0) {
            setIdproductoRelacionado(datosProducto[0].id);
        }},[datosProducto]) */
    return (
        <div className="w-auto ">
            <BannerGeneral
                imagen={
                    'https://res.cloudinary.com/darps1cta/image/upload/v1687643443/nexo/medico-tecnico-laboratorio-analizando-evolucion-virus-tableta-digital-equipo-cientificos-que-llevan-cabo-desarrollo-vacunas-utilizando-alta-tecnologia-investigar-tratamiento-contra-pandem_hykvlk.jpg'
                }
                titulo={'banner'}
            />
            <div className="flex flex-col p-[16px] lg:flex-row lg:gap-[30px] lg:pb-[100px] lg:pt-[30px]">
                <ListaProductos className="lg:w-1/3" />
                <div className="flex flex-col lg:w-2/3">
                    <div className="flex flex-col lg:flex-row">
                        <CarruselProducto
                            slides={Imagenes}
                            options={OPTION}
                            className="lg:w-1/2"
                        />
                        <InfoProducto
                            datos={datosProducto}
                            className="lg:w-1/2"
                        />
                    </div>
                    <Descripcion datos={datosProducto} />
                    {/*    <ProductosRelacionados idproducto={idproductoRelacionado}/> */}
                </div>
            </div>
        </div>
    )
}

export default memo(PaginaProducto)
