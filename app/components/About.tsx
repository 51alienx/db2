import Link from "next/link";
import Container from "./Container";
import React from "react"

function About() {
  return (
    <div className="w-full mb-0 mt-7">
      <Container className=" pt-0  grid grid-cols-1 md:grid-cols-2  gap-10">
        <div className="text-8xl text-primary">
        <p> 
            we  build 
        </p>
        <p>
            singapore&apos;s
        </p>
        <p>
            future
        </p>
        </div>
        <div>
           <p>
                Direct Builders is a fully integrated, singapore based and singapore-focused construction firm, serving our clients in the markets of Infrastructure and Vertical Building.
           </p>
           <Link href="/aboutus">
            <p className="text-sm hover:text-primary mt-6">
              LEARN MORE →
            </p>
           </Link>
        </div>
        </Container>
    </div>
  )
}

export default About