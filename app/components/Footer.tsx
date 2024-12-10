"use client";
import {
  BsYoutube,
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsReddit,
} from "react-icons/bs";

import Container from "./Container";
import { Button } from "@/components/ui/button";

import Link from "next/link";

import { useState } from "react";




const Footer = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    console.log(formData)

    const res = await fetch('/api/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      
    });
    

    // const result = await res.json();

    if (res.status === 200) {
      setStatusMessage('Your message has been sent!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });
      console.log(statusMessage)
    } else {
      setStatusMessage('Something went wrong. Please try again later.');
      console.log(statusMessage)
    }
  };

  
  // const [result, setResult]=useState({})
  // const[loading,setLoading]=useState(false)

  // const sendemail=()=>{
    
  //   setLoading(true)
  //   fetch ('/api/emails',{
  //     method:'POST'
  //   })
  //   .then(response=>response.json())
  //   .then(data =>setResult(data))
  //   .catch(error=> setLoading(error))
  //   .finally(()=>setLoading(false))
  // }
 

  return (
    <div className="w-full bg-gray-200 text-black py-10">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-10">
        <div className="flex flex-col  gap-y-4">
          <h1>DIRECT BUILDERS</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa in
            sint incidunt, minima quos voluptates, nobis autem laborum earum est
            pariatur aperiam. Delectus consectetur maxime quidem veniam,
            corporis.
          </p>
          <div className="flex items-center gap-x-4">
            <a href="https://www.youtube.com/@reactjsBD" target="_blank">
              <span className="socialLink">
                <BsYoutube />
              </span>
            </a>
            <a href="https://www.youtube.com/@reactjsBD" target="_blank">
              <span className="socialLink">
                <BsGithub />
              </span>
            </a>
            <a href="https://www.youtube.com/@reactjsBD" target="_blank">
              <span className="socialLink">
                <BsLinkedin />
              </span>
            </a>
            <a href="https://www.youtube.com/@reactjsBD" target="_blank">
              <span className="socialLink">
                <BsFacebook />
              </span>
            </a>
            <a href="https://www.youtube.com/@reactjsBD" target="_blank">
              <span className="socialLink">
                <BsReddit />
              </span>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="text-lg font-semibold">Links</p>
          <ul className="text-base font-medium mt-2 flex flex-col gap-y-2">
            <Link href={"/"}>
              <li className="hover:text-primary cursor-pointer transition duration-200">
                Home
              </li>
            </Link>

            <Link href={"/about"}>
              <li className="hover:text-primary cursor-pointer transition duration-200">
                About
              </li>
            </Link>
            <li className="hover:text-primary cursor-pointer transition duration-200">
              Newsletter
            </li>
            <li className="hover:text-primary cursor-pointer transition duration-200">
              Contact
            </li>
          </ul>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Have Questions? We&apos;d love to help!
          </h1>
          <form action="" className="space-y-4" onSubmit={handleSubmit} >
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="firstName"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="lastName"
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="email"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="message"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                placeholder="Write your message here"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              ></textarea>
            </div>
            <Button
              type="submit"
              
              className="w-full bg-primary text-white py-2 rounded-lg text-lg font-medium hover:bg-primary-dark focus:ring-4 focus:ring-primary-light transition duration-300"
            >
              Let&apos;s Talk
            </Button>
          </form>
         
        </div>
      </Container>
    </div>
  );
};

export default Footer;
