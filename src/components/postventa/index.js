import React from 'react'
import FormularioPost from './FormularioPost'
import ImagenPost from './ImagenPost'
const PostVenta = () => {
    return (
        <div>
            <div className="p-[16px] lg:pl-[100px] lg:pt-[100px] lg:pb-[100px] lg:pr-[100px]">
                <h1 className="text-2xl font-bold mb-5 text-blueOne">
                    Post-Venta
                </h1>
                <p className="mb-5 text-sm text-justify">
                    Nuestros clientes son lo más importante, es por ello que la
                    venta no finaliza con la entrega del producto. EL compromiso
                    que tenemos es brindarte la mejor asesoría en algún
                    inconveniente que pueda tener con nuestros equipos. Nuestro
                    personal lo atenderán todas sus dudas y así poder
                    resolverlas.
                </p>
                <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-[20px]">
                    <ImagenPost />
                    <FormularioPost />
                </div>
            </div>
        </div>
    )
}

export default PostVenta
