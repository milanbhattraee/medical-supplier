"use client";
import { Button, Input, InputLabel, SimpleGrid, Textarea } from "@mantine/core";
import { CiStopwatch } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";

import {  useState } from "react";
import Link from "next/link";
import { Bounce, toast } from "react-toastify";
import { PiPhoneBold } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa6";
import { BsYoutube } from "react-icons/bs";

const Contacts = [
  {
    title: "Address",
    description_1:
      "Kathmandu , Nepal",
    description_2:
      "Medical Supply District",
    logo: <FaAddressCard />,
  },
  {
    title: "Phone",
     description_1:
      "97000000000",
    description_2:
      "Medical Supply District",
    logo: <PiPhoneBold />,
  },
  {
    title: "Email",
     description_1:
      "email@gmail.com",
    description_2:
      "Medical Supply District",
    logo: <MdEmail />,
  },
];

const SocialMediaLinks = [
  {
    title: "X",
    logo: <RiTwitterXLine />,
    link: "https://www.x.com",
    color: "text-black"
  },
  {
    title: "Facebook",
    logo: <FaFacebook />,
    link: "https://www.facebook.com",
    color: "text-blue-700"
  },
  {
    title: "Youtube",
    logo: <BsYoutube />,
    link: "https://youtube.com",
    color: "text-red-700"
  },
];

const FormDefault = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(FormDefault);



  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderEmail: formData.email,
          senderPhone: formData.phone,
          senderName: formData.name,
          message: formData.message,
        }),
      });
      
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setFormData(FormDefault);
      } else {
        toast.error(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setFormData(FormDefault);
      }
      
    } catch (error) {
      console.error("Error while sending email : ", error);
    }
  };

  return (
    <section
      id="contact"
      className="flex w-full  layout-bg flex-col justify-center md:px-20 md:py-20 px-6 py-10 items-center space-y-10"
    >
      <div className="w-full text-center">
        <h2 className="text-2xl font-bold">Get In Touch</h2>
        <p className="text-secondary py-6">
          connet with us with inquires, quotes , and leadlkfj
        </p>
      </div>
      <div className="w-full">
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} className="w-full">
          {Contacts.map((item, index) => {
            return (
              <div
                style={{
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "10px",
                  border: "1px solid #e0e0e0",
                  marginBottom: "10px",
                }}
                className="flex text-center justify-around flex-col h-60 hover:shadow-lg p-5 space-y-3 transition-all duration-400"
                key={index}
              >
                <div className={`bg-slate-200 mx-auto ${index % 2 ==0 ? "text-blue-700": "text-green-700"} w-10 h-10 text-2xl flex justify-center rounded-md items-center`}>
                  {item.logo}
                </div>
                <div>
                  <h3 className="sub-heading">{item.title}</h3>
                </div>
                <div>
                  <p className="text-secondary ">{item.description_1}</p>
                  <p className="text-secondary">{item.description_2}</p>
                </div>
              </div>
            );
          })}
        </SimpleGrid>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between md:gap-x-10  items-start  ">
        {/* Form  Section */}
        <form
          onSubmit={handleSubmit}
          className="w-full px-6 bg-white py-10 flex justify-center items-center rounded-md border border-slate-200  flex-col gap-3"
        >
          <div className="w-full flex items-center flex-col ">
            <InputLabel className="text-sm w-full text-start   font-semibold">
              Name
            </InputLabel>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              className="border border-gray-300 rounded-md   w-full "
              onChange={onChange}
              value={formData.name}
              required
            />
          </div>
          <div className="w-full">
            <label className="text-sm   font-semibold">Email</label>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={onChange}
              value={formData.email}
              className="border border-gray-300 rounded-md   w-full "
            />
          </div>
          <div className="w-full">
            <label className="text-sm   font-semibold">Phone</label>
            <Input
              type="phone"
              name="phone"
              placeholder="Your Phone"
              onChange={onChange}
              value={formData.phone}
              className="border border-gray-300 rounded-md   w-full "
            />
          </div>
          <div className="w-full">
            <label className="text-sm    font-semibold">Message</label>
            <Textarea
              name="message"
              placeholder="Your Message"
              onChange={onChange}
              value={formData.message}
              className="border border-gray-300 rounded-md   w-full "
              required
            ></Textarea>
          </div>

          <Button
            type="submit"
            style={{
              "background-color": "#005085",
              "width": "100%",
            }}
            className="w-full "
          >
            Submit
          </Button>
        </form>

        <SimpleGrid cols={1} className="w-full">
          <div className="flex w-full bg-white p-6 rounded-xl border border-slate-200 mb-3  justify-start gap-x-10 items-start flex-row h-40 hover:shadow-lg  space-y-3 transition-all duration-400">
            <div className="w-10 h-10 rounded-lg bg-slate-200 flex justify-center items-center grow-0">
              <CiStopwatch className="text-sky-800 text-4xl" />
            </div>
            <div>
              <h3 className="sub-heading">Operating Hours</h3>
              <p className="text-secondary">Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p className="text-secondary">Saturday: 10:00 AM - 3:00 PM</p>
              <p className="text-secondary">Sunday: Closed</p>
            </div>
          </div>
          <div className="flex w-full bg-white p-6 rounded-xl border border-slate-200 mb-3  justify-start gap-x-10 items-start flex-col h-40 hover:shadow-lg  space-y-3 transition-all duration-400">
            <h2 className="sub-heading">Follow Us</h2>
            <div className="flex gap-x-7">
              {SocialMediaLinks.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-10 h-10  rounded-lg bg-slate-200 flex justify-center   items-center grow-0"
                  >
                    <Link  className={`${item.color}  text-2xl`} href={item.link}>{item.logo}</Link>
                  </div>
                );
              })}
            </div>
          </div>
        </SimpleGrid>
      </div>
    </section>
  );
};

export default Contact;
