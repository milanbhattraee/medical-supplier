import { FaStethoscope } from "react-icons/fa";
import { SimpleGrid } from '@mantine/core';
import Image from 'next/image';


const Products = [{
    "title": "Surgical Instruments",
    "description": "High-quality surgical instruments including scalpels, forceps, scissors, and clamps for various medical procedures.",
    "logo" : <FaStethoscope  />
  }, {
    "title": "Diagnostic Equipment",
    "description": "Advanced diagnostic tools such as stethoscopes, blood pressure monitors, and otoscopes to aid in accurate patient assessments." ,
    "logo" : <FaStethoscope />
    }, {
    "title": "Medical Consumables",
    "description": "A wide range of disposable medical supplies including gloves, syringes, bandages, and masks to ensure hygiene and safety.",
    "logo" : <FaStethoscope />
}]

const Clients = () => {
  return ( 
    <sections id="client"  className="w-full md:px-20 items-center px-6 py-20 flex flex-col space-y-10">
      <div className="space-y-5 text-center">
        <h2 className="heading ">Trusted by Healthcare Leaders</h2>
        <p className="text-secondary">
          dvanced diagnostic tools such as stethoscopes, blood pressure
          monitors, and otoscopes to aid in accurate patient{" "}
        </p>
      </div>
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        className=""
      >
        {Products.map((item, index) => {
          return (
            <div
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
                marginBottom: "10px",
                

              }}
              className="flex border-gray-200 border hover:border-sky-500 hover:shadow-xl justify-around items-center text-center flex-col h-60  transition-all duration-400 p-5 space-y-3 "
              key={index}
            >
              {/* <div className='layout-bg text-green-700 w-10 h-10 flex justify-center rounded-md items-center'>{item.logo}</div> */}
              <div className=' rounded-full'>
              <Image
                className=" rounded-full object-cover"
                src="/medical.jpg"
                width={70}
                height={70}
                alt="client logo"

              />
              </div>
              <div>
                <h3 className="sub-heading">{item.title}</h3>
              </div>
              <div>
                <p className="text-secondary">{item.description}</p>
              </div>
            </div>
          );
        })}
      </SimpleGrid>

      <div className='bg-slate-100 rounded-xl border border-sky-200 text-center px-20 py-10'>
        <p className='italic mb-6 sub-heading'>"Nepal MedSupply Hub has been instrumental in helping us provide quality healthcare services across remote regions. Their reliability and commitment to excellence are unmatched."</p>
        <p className='text-secondary'>— Healthcare Director, Nepal Government Facility</p>
      </div>
      
    </sections>
  );
}

export default Clients