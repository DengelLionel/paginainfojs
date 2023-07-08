import React from 'react'
import Image from 'next/legacy/image'
export const Thumb = ({ selected, imgSrc, onClick, titulo }) => {
    return (
        <div
            className={'embla-thumbs__slide shadow-md lg:shadow-xl'.concat(
                selected ? ' embla-thumbs__slide--selected' : '',
            )}>
            <button
                onClick={onClick}
                className="embla-thumbs__slide__button shadow-md lg:shadow-xl"
                type="button">
                {/* <div className="embla-thumbs__slide__number">
                    <span>{index + 1}</span>
                </div> */}
                <div className="relative  w-[100px] h-[100px] shadow-md lg:shadow-xl lg:w-[200px] lg:h-[200px]">
                    <Image
                        layout="fill"
                        objectFit="contain"
                        quality={100}
                        src={imgSrc}
                        alt={titulo}
                    />
                </div>
            </button>
        </div>
    )
}
