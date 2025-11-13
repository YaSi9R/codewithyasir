import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import { MdOutlineDarkMode } from "react-icons/md";
import { MdCircle } from "react-icons/md";
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import boy from "../assets/Boy.png";
import { motion } from 'framer-motion';
import Experience from './Experience';
import Aboutme from './Aboutme';
import ProjectsPage from './ProjectsPage';
import ContactUs from './ContactUs'
import Footer from './Footer'
import { useRef } from 'react'





function HomePage() {
    const [click, setClick] = useState(false);
    const socialIcons = [
        { icon: <FaGithub />, href: "https://github.com/YaSi9R", label: "GitHub" },
        { icon: <SiLeetcode />, href: "https://leetcode.com/u/Yasir12", label: "LeetCode" },
        { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/mohd-yasir-5b4ba9288", label: "LinkedIn" },
    ]

    const homeRef = useRef(null);
    const experienceRef = useRef(null);
    const ProjectsPageRef = useRef(null);
    const AboutmeRef = useRef(null);
    const ContactUsRef = useRef(null);
    return (
        <div className=' min-h-[100vh] bg-mine-shaft-950 text-gray-300  '>
            <div className='md:w-9/12 w-full p-[5px] md:p-0 md:mx-auto flex justify-between items-center py-4 '>
                <Link to="/">
                    <img src={logo} alt="logo" className='w-[160px] h-[80px] object-contain' /></Link>
                <button className='flex flex-row border border-white h-[25px] rounded-lg md:mr-0 mr-2'>


                    <MdOutlineDarkMode className='text-2xl text-gray-300 ' />
                    <MdCircle className='text-2xl text-gray-300 ' />


                </button>

            </div>



            <div className='md:w-9/12 w-full p-[20px] md:p-0  md:mx-auto flex flex-col md:flex-row  justify-between'>
                {/* Left Part */}
                <div className='w-full md:w-1/2 mt-[30px] md:mt-[40px]'>
                    <h1 className='text-[24px] md:text-[32px] w-full'>
                        Hi ! I'm <span className='text-[#FFBD20] font-semibold'>Mohd Yasir</span>
                    </h1>
                    <h1 className='text-[20px] md:text-[28px]'>
                        I am a{' '}
                        <TypeAnimation
                            sequence={[
                                'MERN Stack Developer..',
                                1000,
                                'Frontend Developer..',
                                1000,
                                'Backend Developer..',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{
                                fontSize: '22px',
                                display: 'inline-block',
                                color: '#FFBD20',
                            }}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-base md:text-lg leading-relaxed text-gray-300  mt-4">
                        Hey! I’m a software engineer who thrives on solving problems —<br />
                        This is my <span className='text-[#FFBD20]'>portfolio</span>, where
                        you’ll find the <span className='text-[#FFBD20]'>projects</span> I’ve
                        built,<br /> and the tools I work with, and the challenges I’ve enjoyed
                        solving.
                    </p>

                    <div className="mt-6 flex gap-4 flex-wrap">
                        <a className="px-5 py-2 bg-white text-black rounded hover:bg-[#FFBD20] hover:text-white border-[#FFBD20]" href="/Mohd_yasir_resume.pdf">Download CV</a>

                        <button className="px-5 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition bg-[#FFBD20]" onClick={() =>
                            window.open(
                                "https://wa.me/919720823331?text=Hi%20Yasir!%20I%20want%20to%20talk%20about%20your%20qualifications.",
                                "_blank"
                            )
                        }>
                            Let's Talk
                        </button>
                    </div>

                    <div className="mt-6 flex gap-4">
                        {socialIcons.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-200 hover:text-[#FFBD20] text-2xl transition cursor-pointer"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Part */}
                <div className='w-full md:w-1/2 mt-10 md:-mt-8 relative flex justify-center items-center'>
                    <img src={boy} alt="boy_pic" className='w-[250px] md:w-[460px]' />

                    {/* Floating Cards */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="absolute top-[10px] left-1 md:top-8 md:left-0 bg-white text-[#FFBD20] px-2 md:px-4 py-1 md:py-2 rounded-lg shadow-md border-2 border-blue-400"
                    >
                        <span className="text-xs md:text-sm font-semibold">Frontend Developer</span>
                    </motion.div>


                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="absolute top-[60px] right-2 md:top-[120px] md:right-4 bg-white text-[#FFBD20] px-2 md:px-4 py-1 md:py-2 rounded-lg shadow-md border border-yellow-400"
                    >
                        <span className="text-xs md:text-sm font-semibold">MERN Stack Developer</span>
                    </motion.div>

                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="absolute bottom-[80px] left-2 md:bottom-[120px] md:left-1 bg-white text-[#FFBD20] px-2 md:px-4 py-1 md:py-2 rounded-lg shadow-md border border-purple-400"
                    >
                        <span className="text-xs md:text-sm font-semibold">Web Developer</span>
                    </motion.div>

                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="absolute bottom-2 right-2 md:bottom-4 md:right-0 bg-white text-[#FFBD20] px-2 md:px-4 py-1 md:py-2 rounded-lg shadow-md border border-green-400"
                    >
                        <span className="text-xs md:text-sm font-semibold">Backend Developer</span>
                    </motion.div>
                </div>
            </div>


            <div ref={experienceRef}>
                <Experience />
            </div>
            <div ref={ProjectsPageRef}>
                <ProjectsPage />
            </div>

            <div ref={AboutmeRef}>
                <Aboutme />
            </div>
            <div ref={ContactUsRef}>
                <ContactUs />
            </div>




            <Footer
                refs={{
                    home: homeRef,
                    experience: experienceRef,
                    projects: ProjectsPageRef,
                    about: AboutmeRef,
                    contact: ContactUsRef
                }}
            />
        </div >
    )
}

export default HomePage