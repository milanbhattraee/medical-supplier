"use client"

import Hero from "../components/Hero";
import About from "../components/About";
import Product from "../components/Product";
import Services from "../components/Services";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import Testimonial from "../components/Testimonial"
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineArrowUp } from "react-icons/hi";




export default function Home() {
  
const [visibile , setvisible] = useState(false);

useEffect(() => {
    const handleScroll = () => {
      setvisible(window.scrollY > 200);
    };
    
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <main id="top" className="relative">
      <Hero />
      <About />
      <Product />
      <Services />
      <Clients />
      <Testimonial />
      <Contact />
      <div className={` ${visibile ? "flex fixed" : "hidden fixed"} animate-bounce fixed flex-col  text-center justify-center items-center bottom-10 right-5  text-white bg-sky-800  w-10 h-10 rounded-full`}>
        <Link className="w-full flex items-center justify-center flex-row text-2xl" href="#top"><HiOutlineArrowUp/> </Link>
      </div>
     
    </main>
  );
}
