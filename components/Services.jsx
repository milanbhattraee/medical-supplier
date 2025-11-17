import { FaStethoscope } from "react-icons/fa";
import { SimpleGrid } from '@mantine/core';


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

const Product = () => {
  return (
    <sections id='service' className="layout-bg w-full px-6 sm:px-8 md:px-10 lg:px-20 items-center  py-20 flex flex-col space-y-10">
      <div className="space-y-5 text-center">
        <h2 className="heading ">Our Services</h2>
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
                border: "1px solid #e0e0e0",
                marginBottom: "10px",
              }}
              className="flex justify-around flex-col h-60 hover:shadow-md hover:border-sky-500 p-5 space-y-3 transition-all duration-400" 
              key={index}
            >
              <div className={`layout-bg ${index % 2 ==0 ? "text-blue-700": "text-green-700"} w-10 h-10 flex justify-center rounded-md items-center`}>{item.logo}</div>
              <div>
                <h3 className="sub-heading">{item.title}</h3>
              </div>
              <div>
                <p className='text-secondary'>{item.description}</p>
              </div>
            </div>
          );
        })}
      </SimpleGrid>
      
    </sections>
  );
}

export default Product