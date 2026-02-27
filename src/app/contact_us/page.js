"use client";
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { fadeIn, fadeUp } from '../../components/Variants/Variants';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { PlanetR1, PlanetL2 } from '../../components/Image/Planets';

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name) return toast.error('Please enter your name.');
    if (!formData.email) return toast.error('Please enter your email.');
    if (!formData.phone) return toast.error('Please enter your mobile number.');
    if (!formData.message) return toast.error('Please enter your message.');

    try {
      console.log(formData)
      const response = await fetch('/api/contactMails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Your message was sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form
      } else {
        toast.error(data.message || 'Something went wrong.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className="page-min-h flex items-center overflow-hidden">
      <PlanetR1 />
      <PlanetL2 />
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="container flex justify-center items-center h-full w-full my-[40px] lg:my-0">
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="relative w-[90%] xl:w-[80%] max-w-6xl bg-gradient-to-r from-[#FFBF00] to-[#ffc517]  backdrop-blur-lg rounded-md shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2  border border-accent"
        >
          <span className="absolute w-36 h-36 bg-[#6d4f5362] rounded-full bottom-[-28px] left-[-50px]"></span>
          <span className="absolute w-20 h-20 bg-[#652d3a51] rounded-full top-4 right-[-40px]"></span>
          <span className="absolute w-full h-full bg-[#090909e5] top-0 left-0 backdrop-blur-sm rounded-md"></span>

          {/* Contact Information Section */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" relative px-8 w-full flex flex-col justify-between"
          >
            <div className="flex flex-col items-start justify-center w-full  pt-3">
              <img src="/logo.svg" alt="" className="w-[180px]" />
              <p className="w-full text-white/70">
                We are Faculty of Technology at the University of Sri
                Jayewardenepura! As Sri Lanka's leading technology faculty, we
                are dedicated to inspiring the next generation of innovators. If
                you're curious about our programs, events, or want to learn more
                about SAVISKARA, we’d love to hear from you Connect with us.
              </p>
            </div>
            <div className="mt-6 space-y-1">
              <div className="flex text-white gap-2">
                <MdEmail className="w-5 h-5" />
                <p className="text-sm">saviskara.official@gmail.com</p>
              </div>
            </div>

            <div className="my-4">
              <p className="text-accent font-semibold">Connect with us</p>
              <div className="flex space-x-4 mt-2">
                <a
                  href="https://web.facebook.com/saviskara.fot"
                  target="_blank"
                  className="text-accent/70 hover:text-accent hover:scale-105 transition-all duration-300"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/@Saviskara"
                  target="_blank"
                  className="text-accent/70 hover:text-accent hover:scale-105  transition-all duration-300"
                >
                  <FaYoutube className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/saviskara/?viewAsMember=true"
                  target="_blank"
                  className="text-accent/70 hover:text-accent hover:scale-105  transition-all duration-300"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="relative p-8 bg-gradient-to-r from-[#FFBF00] to-[#ff6a00] text-white"
          >
            <span className="absolute w-32 h-32 bg-[#e7214f62] rounded-full top-32 right-[-20px]"></span>
            <span className="absolute w-20 h-20 bg-[#e2114251] rounded-full top-4 right-8"></span>
            <span className="absolute w-full h-full bg-[#09090951] top-0 right-0 backdrop-blur-sm"></span>
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <h3 className="text-xl font-semibold">Contact us</h3>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-white placeholder-[#fff] text-white focus:outline-none focus:border-yellow-300 px-2 py-1"
                  placeholder="Name"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-white placeholder-[#fff] text-white focus:outline-none focus:border-yellow-300 px-2 py-1"
                  placeholder="Email"
                />
              </div>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-white placeholder-[#fff] text-white focus:outline-none focus:border-yellow-300 px-2 py-1"
                  placeholder="Phone"
                />
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-white placeholder-[#fff] text-white focus:outline-none focus:border-yellow-300 px-2 py-1 resize-none"
                  rows="4"
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-accent font-semibold py-2 rounded-lg shadow-lg hover:bg-transparent hover:text-white border border-white transition-colors"
              >
                Send
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
