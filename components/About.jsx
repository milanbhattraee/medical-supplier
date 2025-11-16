import { GiCheckMark } from "react-icons/gi";

import Image from "next/image";

const AboutItems = [
  {
    title: "Reliability and test",
    discription:
      "Trusted by over 500 healthcare facilities nationwide",
    bgColor: "bg-neutral-200",
    fgColor: "text-sky-800",
  },
  {
    title: "Ethical Practices",
    discription:
      "Committed to fair pricing and transparent operations",
    bgColor: "bg-slate-200",
    fgColor: "text-red-800",
  },
  {
    title: "Healthcare Excellence",
    discription:
      "Contributing to better healthcare outcomes across Nepal",
    bgColor: "bg-neutral-200",
    fgColor: "text-green-400",
  },
];

const About = () => {
  return (
    <section id="about" className=" w-full md:px-20 layout-bg flex py-20 md:flex-row md:justify-between flex-col px-6 space-y-6 items-start">
      <div className="w-auto md:pr-5 md:w-6/12">
        <Image
          className="drop-shadow-2xl rounded-xl"
          src="/medical.jpg"
          width={500}
          height={500}
          alt="hero image"
        />
      </div>
      <div className="w-auto pl-5 md:w-6/12">
        <div className="flex flex-col ">
          <h2 className="heading">About Us</h2>
          <p className="text-secondary">
            We are a leading medical supplies company dedicated to providing
            high-quality healthcare products and services across Nepal. Our
            mission is to empower healthcare institutions with reliable medical
            solutions, expert consultation, and comprehensive support.
          </p>
        </div>
        <div className="flex flex-col  pt-8">
          {AboutItems.map((item , index) => {
            return (
              <div key={index} className="flex items-center h-full  gap-4 py-2">
                <div
                  className={`rounded-full ${item.bgColor} ${item.fgColor} flex  shrink-0 justify-center items-center aspect-square h-12`}
                >
                  <GiCheckMark size={20} />
                </div>
                <div className="py-4">
                  <h3 className=" sub-heading">{item.title}</h3>
                  <p className=" text-sm text-secondary">{item.discription}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
