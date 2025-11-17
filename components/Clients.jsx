import { SimpleGrid } from "@mantine/core";

const Products = [
  {
    title: "Surgical Instruments",
    description:
      "High-quality surgical instruments including scalpels, forceps, scissors, and clamps for various medical procedures.",
  },
  {
    title: "Diagnostic Equipment",
    description:
      "Advanced diagnostic tools such as stethoscopes, blood pressure monitors, and otoscopes to aid in accurate patient assessments.",
  },
  {
    title: "Medical Consumables",
    description:
      "A wide range of disposable medical supplies including gloves, syringes, bandages, and masks to ensure hygiene and safety.",
  },
];

const Clients = () => {
  return (
    <sections
      id="client"
      className="w-full md:px-20 items-center px-6 py-20 flex flex-col space-y-10"
    >
      <div className="space-y-5 w-full text-center">
        <h2 className="heading ">Trusted by Healthcare Leaders</h2>
        <p className="text-secondary">
          dvanced diagnostic tools such as stethoscopes, blood pressure
          monitors, and otoscopes to aid in accurate patient{" "}
        </p>
      </div>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} className="w-full">
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
              <div className=" rounded-full bg bg-linear-to-r w-14 aspect-square place-items-center grid text-white from-sky-800 to-green-700">
                <h3 className="font-bold uppercase">
                  {item.title.slice(0, 2)}
                </h3>
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

     
    </sections>
  );
};

export default Clients;
