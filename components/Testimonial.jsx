import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';
import Image from 'next/image';
import { BiLeftArrow, BiLeftArrowAlt, BiRightArrowAlt, BiSolidLeftArrowAlt } from 'react-icons/bi';


const TestimonialItems = [
  {
    quote:
      "Nepal MedSupply Hub has been instrumental in helping us provide quality healthcare services across remote regions. Their reliability and commitment to excellence are unmatched.",
    name: "Rakesh T",
    image: "/medical.jpg",
  },
  {
    quote:
      "Great experience! The doctor was kind, explained everything clearly, and my pain is finally gone.",
    name: "Rakesh T",
    image: "/medical.jpg",
  },
  {
    quote:
      "Great experience! The doctor was kind, explained everything clearly, and my pain is finally gone.",
    name: "Rakesh T",
    image: "/medical.jpg",
  },
];

const Testimonial = () => {
  const autoplay = useRef(Autoplay({ delay: 4000 }));


  return (
    <div className="px-6 md:px-20 rounded-full  w-full">
      <Carousel
        withIndicators
          controlsOffset="xl"
          nextControlIcon = {<BiRightArrowAlt className='text-sky-800' size={30}/>}
          previousControlIcon = {<BiLeftArrowAlt className='text-sky-800' size={30}/>}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={() => autoplay.current.play()}
        emblaOptions={{ loop: true, align: "start" }}
      >
        {TestimonialItems.map((item, index) => {
          return (
            <Carousel.Slide
              key={index}
              className=" w-full flex items-center mx-2  h-[500px] sm:h-[400px] md:h-[300px] justify-around flex-col primary   rounded-md border border-sky-200 text-center  "
            >
              <p className="italic px-4 sub-heading  sm:text-2xl md:text-4xl lg:text-5xl">
                {item.quote}
              </p>
              <div className="flex flex-col justify-center items-center gap-4 mb-4">
                <div
                  style={{ "clip-path": "inset(0 0 0 0 round 20% 0 20% 0)" }}
                  className="flex w-36 h-36 bg-sky-950  backdrop-blur-3xl justify-center items-center"
                >
                  <Image
                    className="w-28 h-28  "
                    src={item.image}
                    style={{ "clip-path": "inset(0 0 0 0 round 0% 20% 0 20%)" }}
                    width={100}
                    height={100}
                    alt="Testimonial Image"
                  />
                </div>
                <h3 className="sub-heading">{item.name}</h3>
              </div>
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Testimonial