import Image from "next/image";
import About from "./components/About";
import Homeimage from "./components/Home"

export default function Home() {
  return (
   <div>
    <Homeimage/>
    <About/>
   </div>
  );
}
