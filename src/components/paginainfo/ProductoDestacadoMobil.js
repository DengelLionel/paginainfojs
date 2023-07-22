import React from 'react'
import Carousel from 'nuka-carousel'
import IconArrow from '../icons/IconArrow'
import CuadroProductos from './CuadroProductos'
const ProductoDestacadoMobil = ({ datos }) => {
    return (
        <div className="block mt-[30px] w-[300px] lg:hidden">
            {datos?.length > 0 && (
                <Carousel
                    adaptiveHeightAnimation={true}
                    adaptiveHeight={true}
                    defaultControlsConfig={{
                        prevButtonText: (
                            <IconArrow clase="rotate-180" fill="#2F6AAD" />
                        ),
                        nextButtonText: <IconArrow fill="#2F6AAD" />,

                        prevButtonClassName: 'rounded-full bg-white text-white',
                        nextButtonClassName: 'rounded-full',
                    }}
                    wrapAround={true}
                    autoplay={true}>
                    {datos?.map((destacados, index) => (
                        <CuadroProductos
                            key={index}
                            nuevo={destacados.new}
                            oferta={destacados.oferta}
                            imagen={destacados.product_imagen[0].imagen}
                            titulo={destacados.nombre}
                            link={`/producto/${destacados.meta_title_link}`}
                        />
                    ))}
                </Carousel>
            )}
        </div>
    )
}

export default ProductoDestacadoMobil
