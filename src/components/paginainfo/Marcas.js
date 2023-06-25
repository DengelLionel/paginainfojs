import React, { useState, useEffect } from 'react';
import Image from 'next/legacy/image';

const Marcas = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScrollPosition = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', updateScrollPosition);

      return () => {
        window.removeEventListener('scroll', updateScrollPosition);
      };
    }
  }, []);

  let bottomPosition = 0;
  if (typeof window !== 'undefined') {
    bottomPosition = scrollPosition + window.innerHeight < document.body.offsetHeight ? 0 : 160;
  }

  return (
    <div className={`h-[133px] bg-blancoTwo mt-[20px] flex flex-row justify-center items-center fixed z-[9998] w-full shadow-md transition-all`} style={{bottom: `${bottomPosition}px`}}>
      <div className='relative w-[95px] h-[53px]'>
        <Image layout='fill' objectFit='cover' src={'https://res.cloudinary.com/darps1cta/image/upload/v1687493114/nexo/Nexo-Medic_Logo_dklapo.png'} alt='imagen'/>
      </div>
    </div>
  );
}

export default Marcas;