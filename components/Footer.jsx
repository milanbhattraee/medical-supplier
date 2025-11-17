import Link from 'next/link';
import React from 'react'
const headerItem = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Products", href: "#product" },
  { title: "Services", href: "#service" },
  { title: "Clients", href: "#client" },
  { title: "Contact", href: "#contact" },
];
const Footer = () => {
  return (
    <section className="w-full flex flex-col  py-20 px-6 sm:px-8 md:px-10 lg:px-20 items-center bg-neutral-950 text-white">
      <div className='w-full flex flex-col md:flex-row space-y-10 justify-between border-b border-gray-700 pb-10 mb-10'>
        <div className='flex flex-col'>
          <h3 className='sub-heading py-1'>Nepal MedSupply Hub</h3>
          <p className='text-secondary'>Your trust partner sldfjaslkfjadl</p>
        </div>
        <div className='flex flex-col'>
          <h3 className='py-1'>Quick Links</h3>
          <ul className='flex flex-col text-secondary'>
            {headerItem.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer text-md text-gray-700"
            >
              <Link className="w-full hover:text-sky-800" href={item.href}>{item.title}</Link>
            </li>
          ))}
          </ul>
        </div>
        <div className='flex flex-col'>
        <h3 className='py-1'>Legal</h3>
          <ul className='flex flex-col text-secondary'>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className='flex flex-col'>
          <h3 className='sub-heading py-1'>Contact Us</h3>
          <p className='text-secondary'>Kathmandu, Nepal</p>
          <p className='text-secondary'>Email:</p>
          <p className='text-secondary'>Phone:</p>
        </div>
      </div>
      <div>
        <p>© 2024 Nepal MedSupply Hub. All rights reserved.</p>
      </div>
    </section>
  );
}

export default Footer