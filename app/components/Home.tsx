import React from "react";
import Image from "next/image";
import homeimage from "../images/51F7FD24-062C-41C5-A5CB-B1D02FD1F7F2_1_201_a.jpeg";
import { Button } from "@/components/ui/button"


function Homeimage() {
  return (
<div>
  <div>
    <div className="relative">
      {/* Image */}
      <Image
        className="w-full h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[90vh] object-cover"
        src={homeimage}
        alt="img"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-4 py-6 sm:space-y-6 sm:px-6 md:py-10">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font animate-fadeInDown text-center">
          Direct Builders
        </h1>
        <h1 className="text-primary text-3xl sm:text-4xl md:text-6xl font-bold animate-fadeInUp delay-150 text-center">
          Build your construction
        </h1>
        <p className="text-white text-sm sm:text-base md:text-2xl text-center max-w-xs sm:max-w-md md:max-w-4xl animate-fadeIn">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit saepe voluptate, in illum temporibus, tempore vel ab perferendis minus velit veritatis nisi architecto dolore praesentium laboriosam adipisci quaerat. Blanditiis, accusantium.
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-4 animate-fadeInUp delay-300">
          <Button variant="outline" className="w-full sm:w-auto">
            EXPLORE MORE
          </Button>
          <Button className="w-full sm:w-auto">GET STARTED</Button>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default Homeimage;
