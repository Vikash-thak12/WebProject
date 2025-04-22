"use client";

import { Carousel } from "@/components/ui/carousel";
import { slideData } from "@/constants";
import { motion } from "framer-motion";

const CarouselDemo = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 to-purple-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 relative inline-block">
              <span className="relative z-10">Our Projects</span>
              <span className="absolute left-0 bottom-1 h-2 w-full bg-purple-200 rounded-sm "></span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Explore our impressive portfolio of completed projects that showcase
            our expertise and commitment to excellence in precast concrete
            construction.
          </motion.p>

          {/* Decorative shapes */}
          <div className="absolute -right-16 top-0 w-36 h-36 rounded-full border-4 border-purple-200 opacity-20 animate-spin-slow"></div>
          <div className="absolute -left-20 -bottom-10 w-24 h-24 rounded-full bg-purple-100 opacity-30 animate-float"></div>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gray-300"
        >
          <Carousel slides={slideData} />
        </motion.div>
      </div>
    </section>
  );
};

export default CarouselDemo;
