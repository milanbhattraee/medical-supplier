import { Button } from "@mantine/core";
import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";

const HeroItems = [
  { title: "health care facilities", number: "500+" },
  { title: "products delivered", number: "10,000+" },
  { title: "satisfied clients", number: "300+" },
];

const Hero = () => {
  return (
    <section id="home" className="flex justify-between  items-center md:px-20 md:py-20 py-10">
      <div className="flex flex-col space-y-8 justify-center p-5 ">
        <div>
          <h2 className="text heading">
            Your Trusted Partner in Medical Supplies
          </h2>
        </div>
        <div>
          <p className="text-md text-secondary">
            Empowering health with quality medical solutions across Nepal.
            Reliable delivery, expert consultation, and comprehensive support
            for healthcare institutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:gap-4 w-full space-y-3">
          <Button
            style={{
              "background-color": "#005085",
            }}
          >
            Explore Products
            <IoMdArrowForward className="ml-2 mt-1" />
          </Button>
          <Button
            style={{
              "background-color": "white",
              color: "black",
              border: "1px solid gray",
              "hover:background-color": "blue",
            }}
          >
            Get a Quote
          </Button>
        </div>
        <div className="flex  text-center gap-3">
          {HeroItems.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-y-1 gap-x-12">
                <p className="text-3xl font-bold text-green-500">
                  {item.number}
                </p>
                <p className="text-sm text-secondary">{item.title} </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="hidden  md:block p-5 ">
        <Image
          className="drop-shadow-xl rounded-md"
          src="/medical.jpg"
          width={700}
          height={700}
          alt="hero image"
        />
      </div>
    </section>
  );
};

export default Hero;
