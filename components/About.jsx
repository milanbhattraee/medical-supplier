import { TiTick } from "react-icons/ti";
import Image from "next/image";

const AboutItems = [
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
    <section id="about" className=" w-full md:px-20 layout-bg flex py-20 md:flex-row md:justify-between flex-col px-6 space-y-6 items-start">
      <div className="w-auto md:pr-5 md:w-6/12">
        <Image
          className="drop-shadow-2xl rounded-xl"
          src="/medical.jpg"
          width={700}
          height={700}
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
        <div className="flex flex-col pt-8">
          {AboutItems.map((item , index) => {
            return (
              <div key={index} className="flex gap-2 py-2">
                <div
                  className={`rounded-full ${item.bgColor} flex shrink-0 justify-center items-center w-9 h-9`}
                >
                  <TiTick size={15} color={item.fgColor} />
                </div>
                <div className="py-1">
                  <h3 className=" sub-heading">{item.title}</h3>
                  <p className=" text-secondary">{item.discription}</p>
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
