"use client"
import { motion } from "framer-motion"


export default function Aboutme() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }

    return (
        <div className="min-h-screen  text-white mb-[50px] ">


            <div className="md:w-9/12 w-full p-[20px] md:p-0 md:mx-auto py-12">
                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                    {/* Header */}
                    <motion.div variants={itemVariants} className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            About <span className="text-[#FFBD20]">Me</span>
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#FFBD20] to-transparent"></div>
                    </motion.div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                        {/* Text Content */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Hi, I'm <span className="text-[#FFBD20] font-semibold">Mohd Yasir</span>, a passionate software
                                engineering student and full-stack developer. I love crafting beautiful, responsive, and functional web
                                applications using modern technologies.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and have a strong foundation in
                                frontend development with React.js and Tailwind CSS. My backend expertise includes building scalable
                                APIs with Node.js and database design with MongoDB.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                When I'm not coding, I love contributing to open-source projects, solving problems on LeetCode, and
                                continuously learning new technologies. I believe in writing clean, maintainable code and following best
                                practices.
                            </p>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ staggerChildren: 0.15 }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
                            }}
                            className="space-y-8"
                        >
                            {[
                                { title: "700+", text: "DSA Problems Solved" },
                                { title: "10+", text: "Projects Completed" },
                                { title: "200+", text: "Hours of Coding" },
                                { title: "15+", text: "Technical Skills" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={{
                                        hidden: { opacity: 0, x: i % 2 === 0 ? -80 : 80, y: 40 },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            y: 0,
                                            transition: { duration: 0.5, ease: "easeOut" },
                                        },
                                    }}
                                    onViewportLeave={(entry) => entry.target.classList.add("opacity-0")} // 👈 resets when leaving viewport
                                    className="bg-gray-100 border border-gray-700 rounded-lg p-6 hover:border-[#FFBD20] transition-opacity"
                                >
                                    <h3 className="text-[#FFBD20] font-bold text-2xl mb-2">{item.title}</h3>
                                    <p className="text-gray-900 font-semibold">{item.text}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                    </div>

                    {/* Education & Interests */}
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Card - Education */}
                        <motion.div
                            initial={{ opacity: 0, x: -80, y: 40 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: false, amount: 0.35 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="bg-gray-100 border border-gray-700 rounded-lg p-8"
                        >
                            <h2 className="text-2xl font-bold text-[#FFBD20] mb-6">Education</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-[#ffb300] font-semibold mb-1">
                                        B.Tech in Computer Science
                                    </h3>
                                    <p className="text-gray-900 text-sm">University Name • 2022 - 2026</p>
                                    <p className="text-gray-900 mt-2">GPA: 8.81/10</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Card - Interests */}
                        <motion.div
                            initial={{ opacity: 0, x: 80, y: 40 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: false, amount: 0.35 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
                            className="bg-gray-100 border border-gray-700 rounded-lg p-8"
                        >
                            <h2 className="text-2xl font-bold text-[#FFBD20] mb-6">Interests</h2>
                            <ul className="space-y-2 text-gray-900">
                                <li>✓ Web Development & UI/UX</li>
                                <li>✓ Open Source Contribution</li>
                                <li>✓ Problem Solving & DSA</li>
                                <li>✓ Cloud Technologies</li>
                            </ul>
                        </motion.div>
                    </motion.div>


                </motion.div>
            </div>


        </div>
    )
}
