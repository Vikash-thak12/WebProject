"use client";

import { Carousel } from "@/components/ui/carousel";
import { slideData } from "@/constants";
import { motion } from "framer-motion";

const CarouselDemo = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              <span className="relative z-10">Our Projects</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-purple-200 -z-10"></span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Explore our impressive portfolio of completed projects that showcase our expertise 
            and commitment to excellence in precast concrete construction.
          </motion.p>
          
          {/* Decorative elements */}
          <div className="absolute -right-16 top-0 w-36 h-36 rounded-full border-4 border-purple-100 opacity-20 animate-spin-slow"></div>
          <div className="absolute -left-20 -bottom-10 w-24 h-24 rounded-full bg-indigo-100 opacity-30 animate-float"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <Carousel slides={slideData} />
        </motion.div>
      </div>
    </section>
  );
};

export default CarouselDemo;