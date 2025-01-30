'use client'
import About from '@/components/About'
import CarouselDemo from '@/components/CarouselDemo'
import { Progressbar } from '@/components/Progressbar'
import React, { useRef } from 'react'

const HomePage = () => {
  const mainRef = useRef<HTMLElement | null>(null);
  return (
    <main ref={mainRef}>
      <Progressbar target={mainRef} />
      <div className='mt-20'>
        <About />
        <CarouselDemo />
      </div>
    </main>
  )
}

export default HomePage
