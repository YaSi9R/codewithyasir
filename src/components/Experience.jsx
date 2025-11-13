import React from 'react'
import { motion } from "framer-motion"
import { useState } from "react"
import { FaJava } from "react-icons/fa";


import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiGit,
  SiNpm,
  SiWebpack,
  SiDocker,
  SiAmazon,
  SiFirebase,
} from "react-icons/si"


import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase, FaPython, FaAws } from "react-icons/fa"

function Experience() {
  const [activeTab, setActiveTab] = useState("frontend")
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const skillIcons = {
    "React.js": SiReact,
    JavaScript: SiJavascript,
    HTML5: SiHtml5,
    CSS3: SiCss3,
    "Tailwind CSS": SiTailwindcss,
    "Next.js": SiNextdotjs,
    Redux: SiRedux,
    TypeScript: SiTypescript,
    "Node.js": SiNodedotjs,
    "Express.js": SiExpress,
    MongoDB: SiMongodb,
    "JAVA": FaJava,
    Authentication: SiNodedotjs,
    JWT: SiTypescript,
    "Socket.io": SiNodedotjs,
    Postman: SiPostman,
    "Git & GitHub": SiGit,
    "VS Code": SiJavascript,
    "NPM/Yarn": SiNpm,
    Webpack: SiWebpack,
    Babel: SiJavascript,
    Docker: SiDocker,
    AWS: SiAmazon,
    Firebase: SiFirebase,
  }

  const skillColors = {
    "React.js": "#61DAFB",
    JavaScript: "#F7DF1E",
    HTML5: "#E34C26",
    CSS3: "#1572B6",
    "Tailwind CSS": "#06B6D4",
    "Next.js": "#000000",
    Redux: "#764ABC",
    TypeScript: "#3178C6",
    "Node.js": "#68A063",
    "Express.js": "#000000",
    MongoDB: "#13AA52",
    "JAVA": "#FF6C37",
    Authentication: "#68A063",
    JWT: "#3178C6",
    "Socket.io": "#68A063",
    Postman: "#FF6C37",
    "Git & GitHub": "#F1502F",
    "VS Code": "#007ACC",
    "NPM/Yarn": "#CB3837",
    Webpack: "#8DD6F9",
    Babel: "#F9DC3E",
    Docker: "#2496ED",
    AWS: "#FF9900",
    Firebase: "#FFA500",
  }

  const skillCategories = [
    {
      id: "frontend",
      category: "Frontend ",

      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Redux", "TypeScript"],
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      id: "backend",
      category: "Backend ",

      skills: ["Node.js", "Express.js", "MongoDB", "JAVA", "Authentication", "JWT", "Socket.io", "Postman"],
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      id: "tools",
      category: "Tools & Technologies",

      skills: ["Git & GitHub", "VS Code", "NPM/Yarn", "Webpack", "Babel", "Docker", "AWS", "Firebase"],
      color: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
    },
    {
      id: "soft Skills",
      category: "Soft SKills",

      skills: ["Problem Solving", "Communication", "Team Work", "Time Management", "Adaptability", "Leadership"],
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
    },
  ]

  const skillCategories1 = [
    {
      id: "frontend",
      category: "Frontend Development",

      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Redux", "TypeScript"],
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      id: "backend",
      category: "Backend Development",

      skills: ["Node.js", "Express.js", "MongoDB", "JAVA", "Authentication", "JWT", "Socket.io", "Postman"],
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      id: "tools",
      category: "Tools & Technologies",

      skills: ["Git & GitHub", "VS Code", "NPM/Yarn", "Webpack", "Babel", "Docker", "AWS", "Firebase"],
      color: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
    },
    {
      id: "soft Skills",
      category: "Soft Skills",

      skills: ["Problem Solving", "Communication", "Team Work", "Time Management", "Adaptability", "Leadership"],
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
    },
  ]
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  }

  const skillBadgeVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -20 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.5, type: "spring" } },
    hover: { scale: 1.15, y: -8, rotate: 5, transition: { duration: 0.2 } },
  }

  const activeCategory = skillCategories.find((cat) => cat.id === activeTab)

  return (
    <>
      <div className='md:w-9/12 w-full p-[20px] md:p-0  md:mx-auto justify-between text-[#FFBD20] font-bold text-3xl text-center justify-center'>
        What I do
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="text-lg text-gray-300  max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>
      </div>

      <div className="min-h-screen  text-white overflow-hidden">
        <div className="md:w-9/12 w-full p-[20px] md:p-0 md:mx-auto py-16">



          {/* Skills Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mb-20"
          >
            <h1 className="text-4xl  font-bold mb-4">
              Technical <span className="text-[#FFBD20]">Arsenal</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r mb-4 from-[#FFBD20] to-transparent"></div>

            <div className="flex flex-wrap gap-3 mb-12">
              {skillCategories.map((cat) => (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 backdrop-blur-md ${activeTab === cat.id
                    ? "bg-[#FFBD20] text-white shadow-lg border border-transparent border-white"
                    : "bg-gray-100 text-black hover:bg-[#ffce5d] border border-gray-700 hover:border-[#FFBD20]/50 hover:text-white"
                    }`}
                >

                  {cat.category}
                </motion.button>
              ))}
            </div>

           {activeCategory && (
  <motion.div
    key={activeCategory.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: false, amount: 0.3 }} // 👈 this makes it re-animate on scroll
    className={`grid grid-cols-2 md:grid-cols-4 gap-4 p-8 ${activeCategory.bgGradient}`}
  >
    {activeCategory.skills.map((skill, idx) => {
      const IconComponent = skillIcons[skill]
      const iconColor = skillColors[skill]
      const isHovered = hoveredSkill === idx

      return (
        <motion.div
          key={idx}
          variants={skillBadgeVariants}
          viewport={{ once: false, amount: 0.3 }} // 👈 optional for individual card replays
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          transition={{ delay: idx * 0.06 }}
          onMouseEnter={() => setHoveredSkill(idx)}
          onMouseLeave={() => setHoveredSkill(null)}
          className="group cursor-pointer border border-[3px] border-[#FFBD20] rounded-2xl"
        >
          <div className="relative h-32 rounded-xl bg-gray-100 text-black border group-hover:border-[#FFBD20] flex flex-col items-center justify-center gap-3 p-4 transition-all duration-300 overflow-hidden">
            <motion.div
              animate={isHovered ? { scale: 1.5, opacity: 0.3 } : { scale: 1, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-r from-[#FFBD20] to-yellow-400 blur-2xl"
            />

            {IconComponent ? (
              <motion.div
                animate={isHovered ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative z-10"
              >
                <IconComponent
                  size={40}
                  color={isHovered ? "#FFBD20" : iconColor}
                  className="transition-colors duration-300 drop-shadow-lg"
                />
              </motion.div>
            ) : (
              <motion.div
                animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
                className="relative z-10 text-3xl"
              >
                ⚡
              </motion.div>
            )}

            <motion.span
              animate={isHovered ? { y: -5 } : { y: 0 }}
              className="font-bold text-sm md:text-base text-center text-black group-hover:text-[#FFBD20] transition-colors duration-300 relative z-10"
            >
              {skill}
            </motion.span>

            <motion.div
              animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
              className="absolute bottom-2 h-0.5 bg-gradient-to-r from-[#FFBD20] to-transparent rounded-full w-6 origin-center"
            />
          </div>
        </motion.div>
      )
    })}
  </motion.div>
)}


            {/* Skill Distribution Grid - Original Categories */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
            >
              {skillCategories1.map((cat, index) => (
                <motion.div key={index} variants={itemVariants} viewport={{ once: false, amount: 0.3 }} className="group relative overflow-hidden rounded-2xl">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${cat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />
                  <div className="relative bg-gray-100 backdrop-blur-sm border border-gray-700  rounded-2xl p-8 transition-all duration-500">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-4xl">{cat.icon}</span>
                      <h3 className="text-black font-serif text-2xl ">{cat.category}
                        <span className='w-auto border-t border-dashed border-[#FFBD20] block '></span>

                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className=" bg-[#FFBD20] text-white px-3 py-1 rounded-full text-xs md:text-sm border border-[#FFBD20]/30 hover:bg-[#FFBD20]/20 hover:shadow-lg hover:text-black hover:shadow-[#FFBD20]/20 transition-all cursor-pointer"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>




    </>
  )
}

export default Experience