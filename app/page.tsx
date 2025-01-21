import About from '@/components/About'
import CarouselDemo from '@/components/CarouselDemo'
import React from 'react'

const HomePage = () => {
  return (
    <main>
      <div className='mt-20'>
        <About />
        <CarouselDemo />
        {/* <NumberTickerDemo /> */}
      </div>
    </main>
  )
}

export default HomePage
