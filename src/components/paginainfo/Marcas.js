import React, { useState, useEffect,useRef } from 'react';
import Image from 'next/legacy/image';
import { useDatosMarca } from '@/hooks/useDatosMarca';
import useEmblaCarousel from 'embla-carousel-react'

const Marcas = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const autoplayRef = useRef();
const {datos}=useDatosMarca()

  const updateScrollPosition = () => {
    setScrollPosition(window.scrollY);
  };
  const autoplay = (delay) => {
    if (!emblaApi) return;
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, delay);
  };
  useEffect(() => {
    if (!emblaApi) return;
    autoplay(3000);
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', updateScrollPosition);

      return () => {
        window.removeEventListener('scroll', updateScrollPosition);
      };
    }
  }, [emblaApi]);

  let bottomPosition = 0;
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  if (typeof window !== 'undefined') {
    const scrollHeight = document.body.offsetHeight;
    const windowHeight = window.innerHeight;
    const bottomEdge = scrollHeight - scrollPosition - windowHeight;

    if(isMobile) {
      // mobile behavior
      bottomPosition = bottomEdge <= 110 ? 110 : 0;
    } else {
      // desktop behavior
      bottomPosition = bottomEdge <= 50 ? 50 : 0;
    }
  }

  return (
    <div className={`h-[133px] bg-blancoTwo mt-[20px] flex flex-col justify-center items-center fixed z-[9998] w-full shadow-marca transition-all lg:flex-row lg:justify-between lg:pl-[30px] lg:pr-[30px]`} style={{bottom: `${bottomPosition}px`}}>
      <div className='text-negro  mb-[10px] lg:mb-0'>
      <span className='font-medium lg:text-[20px]'>LAS MEJORES <span className='font-bold lg:text-[22px]'>MARCAS</span> </span>
      </div>
      <div className=' overflow-hidden lg:w-[900px]'  ref={emblaRef}>
      <div className='flex flex-row gap-[10px] touch-pan-y ml-[calc(1rem * -1)] ' >
      {datos?.[0].map((marca,index)=>{
        return(
          <div className='embla_slide'>
          <div key={index} className='relative w-[300px] h-[70px] '>
        <Image layout='fill' objectFit='cover' src={marca.imagen} alt='clientes de nexomedic'/>
      </div>
      </div>
        )
      })}
        </div>
        </div>
      
      
    </div>
  );
}

export default Marcas;