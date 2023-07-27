import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const ImagenPost = () => {
    return (
        <div>
            <div className="flex lg:hidden ">
                <Image
                    width={300}
                    height={300}
                    quality={100}
                    priority={true}
                    src={
                        'https://res.cloudinary.com/dxvqyh8ib/image/upload/v1690429093/post_venta_new_k189qo.png'
                    }
                />
            </div>
            <div className="hidden lg:flex ">
                <Image
                    width={400}
                    height={400}
                    quality={100}
                    priority={true}
                    src={
                        'https://res.cloudinary.com/dxvqyh8ib/image/upload/v1690429093/post_venta_new_k189qo.png'
                    }
                />
            </div>
            <h2 className="text-blueOne font-medium text-xl">
                Para consultas llamar al:
            </h2>
            <Link
                href={'tel:+51999780748'}
                className="w-[200px] lg:ml-[50px] lg:mt-[15px] lg:mb-[15px] text-center bg-blueOne text-white text-sm font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300"
                type="submit">
                999-780-748
            </Link>
            <h2 className="text-blueOne font-medium text-xl text-center">
                serviciotecnico@nexomedic.com.pe
            </h2>
        </div>
    )
}

export default ImagenPost
