"use client"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"
import { motion } from "framer-motion"

function Footer({ refs }) {
    const handleScroll = (section) => {
        refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
    };

    const socialLinks = [
        { icon: <FaGithub />, href: "https://github.com/YaSi9R", label: "GitHub" },
        { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/mohd-yasir-5b4ba9288", label: "LinkedIn" },
        { icon: <FaTwitter />, href: "https://www.linkedin.com/in/mohd-yasir-5b4ba9288", label: "Twitter" },
        { icon: <FaEnvelope />, href: "mailto:your.email@example.com", label: "Email" },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <footer className="border-t border-[#FFBD20] py-8 md:py-12 mt-8">
            <div className="md:w-9/12 w-full p-[20px] md:p-0 md:mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
                >
                    {/* About Section */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-[#FFBD20] font-bold mb-4">About</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            A passionate MERN stack developer crafting beautiful and functional web experiences.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-[#FFBD20] font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <button
                                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                    className="text-gray-400 hover:text-[#FFBD20] transition"
                                >
                                    Home
                                </button>
                            </li>

                            <li>
                                <button
                                    onClick={() => handleScroll("projects")}
                                    className="text-gray-400 hover:text-[#FFBD20] transition"
                                >
                                    Projects
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleScroll("experience")}
                                    className="text-gray-400 hover:text-[#FFBD20] transition"
                                >
                                    Experience
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleScroll("about")}
                                    className="text-gray-400 hover:text-[#FFBD20] transition"
                                >
                                    Skills / About
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleScroll("contact")}
                                    className="text-gray-400 hover:text-[#FFBD20] transition"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-[#FFBD20] font-bold mb-4">Follow Me</h3>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="text-gray-400 hover:text-[#FFBD20] text-xl transition transform hover:scale-110"
                                    title={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white text-sm">© 2025 <span className="text-[#FFBD20]">Mohd Yasir . </span> All rights reserved.</p>
                    <p className="text-gray-500 text-sm">
                        Designed & Built with <span className="text-[#FFBD20]">❤</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
