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
        <Image className="w-full h-full" src={homeimage} alt="img" />
        
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 px-6 py-10">
          <h1 className="text-white text-4xl font animate-fadeInDown">direct builders</h1>
          <h1 className="text-primary text-6xl font-bold animate-fadeInUp delay-150">Build your construction</h1>
          <p className="text-white text-2xl text-center max-w-4xl animate-fadeIn  ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit saepe voluptate, in illum temporibus, tempore vel ab perferendis minus velit veritatis nisi architecto dolore praesentium laboriosam adipisci quaerat. Blanditiis, accusantium.
          </p>
          <div className="flex gap-4 animate-fadeInUp delay-300">
            <Button variant="outline">EXPLORE MORE</Button>
            <Button>GET STARTED</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Homeimage;
