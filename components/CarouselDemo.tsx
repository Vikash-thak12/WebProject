"use client";

import {Carousel} from "@/components/ui/carousel";
import { slideData } from "@/constants";
const CarouselDemo = () => {
  return (
    <div className="relative overflow-hidden w-full h-full md:py-24 max-sm:pb-20 max-sm:mt-[40rem]">
      <Carousel slides={slideData} />
    </div>
  );
}


export default CarouselDemo;