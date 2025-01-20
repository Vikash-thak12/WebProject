import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"

const About = () => {
    return (
        <main className='grid grid-cols-1 md:grid-cols-2 h-[80vh] md:px-40 md:py-10'>
            <div className='flex items-center justify-center'>
                <Image src={"/images/tirupati.png"} alt="about" width={350} height={100} />
            </div>
            <div className='flex flex-col mt-5 px-5'>
                <div className='flex items-center gap-5'>
                    <p className='px-4 py-10 border-4 border-red-500 font-bold text-7xl'>11</p>
                    <span className='font-semibold text-xl'>Years <br /> Expeience</span>
                </div>
                <div className='mt-5'>
                    <h1 className='font-bold text-4xl'>Who We Are?</h1>
                    <p className='text-black py-5'>Tirupati Precast Concrete works is synonym to strength, Quality and best service. We have provide this to be true for over four decades now. with our well equipped and revolutionary plant we have managed to become the frontiers in our industry and products the best in the business. our state of the art machiner yallows us to bring to you absolutely the best quality of products as well as grate services and all this at reasonable prices.
                        <br />
                        Large-scale construction requires collaboration across multiple disciplines. A project manager normally manages the job and a architect supervises it. Year after year, we continue to deliver first class solutions for customers while ensuring we carry on growing. We know that the market is always developing, meaning the needs of our customers are forever changing.
                    </p>

                    <Button>Read More</Button>
                </div>
            </div>
        </main>
    )
}

export default About
