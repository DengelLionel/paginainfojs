import React from 'react'
import Image from 'next/legacy/image'
export const Thumb = ({ selected, imgSrc, index, onClick, titulo }) => {
    return (
        <div
            className={'embla-thumbs__slide'.concat(
                selected ? ' embla-thumbs__slide--selected' : '',
            )}>
            <button
                onClick={onClick}
                className="embla-thumbs__slide__button"
                type="button">
                <div className="embla-thumbs__slide__number">
                    <span>{index + 1}</span>
                </div>
                <div className="relative w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]">
                    <Image
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        src={imgSrc}
                        alt={titulo}
                    />
                </div>
            </button>
        </div>
    )
}
