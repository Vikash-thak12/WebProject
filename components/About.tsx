"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"
import NumberTickerDemo from './NumberTickerDemo'
import { motion } from 'framer-motion'

const About = () => {
    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
        }
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    return (
        <section className="py-20 md:py-32 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
                >
                    <motion.div variants={fadeInUpVariants} className="relative">
                        <div className="absolute -left-10 -top-10 w-72 h-72 rounded-full bg-purple-100 opacity-30 animate-pulse-slow"></div>
                        <div className="absolute -right-10 -bottom-10 w-60 h-60 rounded-full bg-indigo-100 opacity-30 animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
                        
                        <motion.div 
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "tween" }}
                            className="relative z-10"
                        >
                            <Image 
                                src="/images/tirupati.png" 
                                alt="Tirupati Precast" 
                                width={500} 
                                height={400} 
                                className="mx-auto md:mx-0 rounded-lg shadow-xl"
                            />
                        </motion.div>
                    </motion.div>
                    
                    <div>
                        <motion.div 
                            variants={fadeInUpVariants}
                            className="flex items-center gap-6 mb-8"
                        >
                            <div className="gradient-bg-2 rounded-xl px-6 py-5 text-white font-bold text-5xl md:text-6xl shadow-lg">
                                <NumberTickerDemo />
                            </div>
                            <div className="font-semibold text-xl md:text-2xl">
                                <span className="block text-gray-800">Years</span>
                                <span className="gradient-text font-bold">Experience</span>
                            </div>
                        </motion.div>
                        
                        <motion.h2 
                            variants={fadeInUpVariants}
                            className="text-3xl md:text-4xl font-bold mb-6 relative inline-block"
                        >
                            <span className="relative z-10">Who We Are?</span>
                            <span className="absolute bottom-1 left-0 w-full h-3 bg-purple-200 -z-10"></span>
                        </motion.h2>
                        
                        <motion.p 
                            variants={fadeInUpVariants}
                            className="text-gray-600 mb-6 leading-relaxed"
                        >
                            Tirupati Precast Concrete works is synonym to strength, Quality and best service. We have provided this to be true for over four decades now. With our well-equipped and revolutionary plant, we have managed to become the frontiers in our industry and products the best in the business.
                        </motion.p>
                        
                        <motion.p 
                            variants={fadeInUpVariants}
                            className="text-gray-600 mb-8 leading-relaxed"
                        >
                            Our state-of-the-art machinery allows us to bring to you absolutely the best quality of products as well as great services, all at reasonable prices. We collaborate across multiple disciplines to deliver first-class solutions for customers while ensuring we carry on growing and adapting to the market&apos;s evolving needs.
                        </motion.p>
                        
                        <motion.div 
                            variants={fadeInUpVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-block"
                        >
                            <Button className="gradient-bg-1 text-white rounded-full px-8 py-6 shadow-md hover:shadow-lg">
                                Learn More
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
