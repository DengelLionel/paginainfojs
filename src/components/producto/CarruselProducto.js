import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './Thumb'
import Image from 'next/legacy/image'
const CarruselProducto = props => {
    const { slides, options } = props
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: true,
    })
    const onThumbClick = useCallback(
        index => {
            if (!emblaMainApi || !emblaThumbsApi) return
            emblaMainApi.scrollTo(index)
        },
        [emblaMainApi, emblaThumbsApi],
    )

    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) return
        setSelectedIndex(emblaMainApi.selectedScrollSnap())
        emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
    }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaMainApi) return
        onSelect()
        emblaMainApi.on('select', onSelect)
        emblaMainApi.on('reInit', onSelect)
    }, [emblaMainApi, onSelect])
    return (
        <div className="embla ">
            <div
                className="embla__viewport shadow-md lg:shadow-lg"
                ref={emblaMainRef}>
                <div className="embla__container">
                    {slides?.[0]?.map((imagen, index) => (
                        <div className="embla_slide_product" key={index}>
                            <div className="relative w-[300px] h-[300px] lg:w-auto lg:h-[400px] shadow-md lg:shadow-lg">
                                <Image
                                    layout="fill"
                                    objectFit="contain"
                                    src={imagen.imagen && imagen.imagen}
                                    alt={imagen.titulo && imagen.titulo}
                                    quality={100}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla-thumbs">
                <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
                    <div className="embla-thumbs__container">
                        {slides?.[0]?.map((imagen, index) => (
                            <Thumb
                                onClick={() => onThumbClick(index)}
                                selected={index === selectedIndex}
                                titulo={imagen.titulo && imagen.titulo}
                                imgSrc={imagen.imagen && imagen.imagen}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarruselProducto
