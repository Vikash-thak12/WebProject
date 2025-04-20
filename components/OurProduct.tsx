"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  index: number;
}

const ProductCard = ({
  title,
  description,
  imageSrc,
  index,
}: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 w-full p-4">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="gradient-bg-1 text-white px-4 py-2 rounded-full text-sm font-medium"
              >
                View Details
              </motion.button>
            </div>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              Premium Quality
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primary transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const OurProduct = () => {
  const products = [
    {
      title: "Precast Concrete Walls",
      description:
        "Our premium precast concrete walls are manufactured with precision in our state-of-the-art facility, ensuring highest quality and strength for any construction project.",
      imageSrc: "/images/9.jpg",
    },
    {
      title: "Concrete Pavers",
      description:
        "Durable and aesthetically pleasing concrete pavers for pathways, driveways, and outdoor spaces that withstand heavy traffic and harsh weather conditions.",
      imageSrc: "/images/10.jpg",
    },
    {
      title: "Structural Elements",
      description:
        "Custom precast structural elements including beams, columns, and slabs designed to your exact specifications with superior load-bearing capacity.",
      imageSrc: "/images/11.jpg",
    },
    {
      title: "Decorative Concrete",
      description:
        "Beautiful decorative concrete products for architectural applications, including facades, ornamental elements, and custom design features.",
      imageSrc: "/images/12.jpg",
    },
  ];

  return (
    <section className="py-20 overflow-hidden bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              <span className="relative z-10">Our Products</span>
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
            Discover our range of high-quality precast concrete products,
            designed for durability, precision, and superior performance in any
            construction project.
          </motion.p>

          {/* Decorative elements */}
          <div className="absolute -right-16 top-0 w-36 h-36 rounded-full border-4 border-purple-100 opacity-20 animate-spin-slow"></div>
          <div className="absolute -left-20 -bottom-10 w-24 h-24 rounded-full bg-indigo-100 opacity-30 animate-float"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              imageSrc={product.imageSrc}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button className="gradient-bg-1 text-white rounded-full px-8 py-6 shadow-md hover:shadow-lg">
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurProduct;
