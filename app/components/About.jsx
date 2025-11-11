import React from 'react'
import { TiTick } from "react-icons/ti";
import Image from 'next/image';
import { BackgroundImage } from '@mantine/core';

const aboutItems = [
  {
    title: "Reliability and test",
    discription:
      "We ensure that all our products meet stringent quality standards and are sou.",
    bgColor: "bg-green-300",
    fgColor: "text-green-100",
  },
  {
    title: "Reliability and test",
    discription:
      "We ensure that all our products meet stringent quality standards and are sou.",
    bgColor: "bg-green-300",
    fgColor: "text-green-100",
  },
  {
    title: "Reliability and test",
    discription:
      "We ensure that all our products meet stringent quality standards and are sou.",
    bgColor: "bg-green-300",
    fgColor: "text-green-100",
  },
];

const About = () => {
  return (
    <section className=" w-full flex flex-col px-6 space-y-6 items-start">
      <div>
        <Image
          className="drop-shadow-2xl"
          src="/medical.jpg"
          width={700}
          height={700}
          alt="hero image"
        />
      </div>
      <div className='flex flex-col '>
        <h1 className='heading'>About Us</h1>
        <p className='text-secondary'>
          We are a leading medical supplies company dedicated to providing
          high-quality healthcare products and services across Nepal. Our
          mission is to empower healthcare institutions with reliable medical
          solutions, expert consultation, and comprehensive support.
        </p>
      </div>
      <div className="flex flex-col ">
        
        {aboutItems.map((item, index) => {
            return (
              <div className="flex gap-2 ">
                <div
                  className={`rounded-full ${item.bgColor} flex shrink-0 justify-center items-center w-10 h-10`}
                >
                  <TiTick size={15} color={item.fgColor} />
                </div>
                <div className=''>
                  <h3 className='py-1 text-lg font-bold'>{item.title}</h3>
                  <p className='py-1 text-secondary'>{item.discription}</p>
                </div>
              </div>
            );
        })}
      </div>
    </section>
  );
}

export default About