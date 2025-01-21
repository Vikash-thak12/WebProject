import About from '@/components/About'
import CarouselDemo from '@/components/CarouselDemo'
// import NumberTickerDemo from '@/components/NumberTickerDemo'
import React from 'react'

const HomePage = () => {
  return (
    <main>
      <div className='mt-20'>
        <About />
        {/* <NumberTickerDemo /> */}
        <CarouselDemo />
        <div>
        </div>
      </div>
    </main>
  )
}

export default HomePage
