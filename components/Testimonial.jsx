import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import Image from "next/image";
import {
  BiLeftArrow,
  BiLeftArrowAlt,
  BiRightArrowAlt,
  BiSolidLeftArrowAlt,
} from "react-icons/bi";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const TestimonialItems = [
  {
    quote:
      "Nepal MedSupply Hub has been instrumental in helping us provide quality healthcare services across remote regions. Their reliability and commitment to excellence are unmatched.",
    name: "Elon Musk",
    image: "/elon.webp",
  },
  {
    quote:
      "Great experience! The doctor was kind, explained everything clearly, and my pain is finally gone.",
    name: "Elon Musk",
    image: "/elon.webp",
  },
  {
    quote:
      "Great experience! The doctor was kind, explained everything clearly, and my pain is finally gone.",
    name: "Elon Musk",
    image: "/elon.webp",
  },
  {
    quote:
      "Nepal MedSupply Hub has been instrumental in helping us provide quality healthcare services across remote regions. Their reliability and commitment to excellence are unmatched.",
    name: "Elon Musk",
    image: "/elon.webp",
  },
  {
    quote:
      "Great experience! The doctor was kind, explained everything clearly, and my pain is finally gone.",
    name: "Elon Musk",
    image: "/elon.webp",
  },
  {
    quote:
      "Great experience! The doctor was kind, explained everything clearly, and my pain is finally gone.",
    name: "Elon Musk",
    image: "/elon.webp",
  },
];

const Testimonial = () => {
  const autoplay = useRef(Autoplay({ delay: 4000 }));

  return (
    <div className="px-6 sm:px-8 md:px-10 lg:px-20 w-full">
      <Carousel
        w={"100%"}
        withIndicators
        controlsOffset="lg"
        nextControlIcon={<BiRightArrowAlt className="text-sky-800" size={30} />}
        previousControlIcon={
          <BiLeftArrowAlt className="text-sky-800" size={30} />
        }
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={() => autoplay.current.play()}
        emblaOptions={{ loop: true, align: "center" }}
        type="container"
        slideSize={{ base: '100%', '600px': '50%', '1024px': '32.333333%' }}
      >
        {TestimonialItems.map((item, index) => {
          return (
            <Carousel.Slide
              key={index}
              className="flex items-center mx-2  py-6  flex-col rounded-md border border-sky-200 text-center primary"
            >
              <div className="flex flex-col  items-center gap-4 mb-4">
                <div
                  // style={{ "clip-path": "inset(0 0 0 0 round 20% 0 20% 0)" }}
                  style={{ "clip-path": "inset(0 0 0 0 round 0% 20% 0 20%)" }}
                  className="flex w-28 h-36 bg-sky-950 flex-col  backdrop-blur-3xl justify-start items-center"
                >
                  <Image
                    className="w-28 h-28  "
                    src={item.image}
                    style={{ "clip-path": "inset(0 0 0 0 round 0% 20% 0 20%)" }}
                    width={100}
                    height={100}
                    alt="Testimonial Image"
                  />
                <h3 className="sub-heading">{item.name}</h3>
                </div>
                  <FaQuoteLeft className=" text-start" />
                <p className="italic px-4 text-center  sm:text-sm md:text-md">
                  {item.quote}
                </p>
              </div>
            </Carousel.Slide>
          );
        })}
      </Carousel>
     </div>
  );
};

export default Testimonial;
