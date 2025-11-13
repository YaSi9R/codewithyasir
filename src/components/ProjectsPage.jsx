"use client"
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import bookishImg from "./../assets/bookish_resized.png"
import studysphere from "./../assets/StudySphereImg.png"
import mealmitra from "./../assets/MealMitraImg.png"
import foodexplorerImg from "./../assets/foodExploreImg.png"
import quizImg from "./../assets/quizImg.png"
export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Bookish",
      description:
        "A full-stack MERN platform that enables users to buy and sell pre-owned books with secure authentication, dynamic listings, cart management, and Stripe-based payment integration",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js","Socket.IO","Tailwind CSS","Redux"],
      image: bookishImg,
      github: "https://github.com/YaSi9R/boookish",
      live: "https://bookish-psi.vercel.app/",
    },
    {
      id: 2,
      title: "StudySphere",
      description:
        "A full-stack EdTech platform where instructors can create and manage courses, and students can enroll in them using Razorpay integration and complete their learning journey",
      technologies: ["React.js", "MongoDb", "Express.js", "Node.js","JWT","REST API","Tailwind CSS"],
      image: studysphere,
      github: "https://github.com/YaSi9R/edtech_project",
      live: "https://studyspheree-iota.vercel.app/",
    },
    {
      id: 3,
      title: "MealMitra",
      description: "A full-stack MERN application that connects food donors with receivers using an intelligent location-based notification algorithm inspired by Uber/Ola driver finding mechanisms.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js","Socket.IO","Tailwind CSS","Redux"],
      image: mealmitra,
      github: "https://github.com/YaSi9R/MealMitra",
      live: "https://meal-mitra-five.vercel.app/",
    },
    {
      id: 4,
      title: "Food Explorer",
      description:
        "A web app to find product details using a free third-party API, featuring search, sorting, category filters, and barcode scanning.",
      technologies: ["React", "REST API", "Tailwind CSS", "Axios"],
      image: foodexplorerImg,
      github: "https://github.com/YaSi9R/foodexplorer",
      live: "https://foodexplorer-mauve.vercel.app/",
    },
    {
      id: 5,
      title: "Quiz Platform",
      description: "An interactive quiz app built with React and Next.js using the Open Trivia DB API, featuring timers, difficulty levels, and score tracking.",
      technologies: ["React", "Next.js", "REST API", "Tailwind CSS"],
      image:quizImg,
      github: "https://github.com/YaSi9R/quizzassignment",
      live: "https://quizassignment.vercel.app/",
    },
    
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="min-h-screen  text-white mb-[50px]">
      

      <div className="md:w-9/12 w-full p-[20px] md:p-0 md:mx-auto py-12">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-[#FFBD20]">Projects</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FFBD20] to-transparent"></div>
          <p className="text-gray-400 text-lg mt-4">
            Explore the projects I've built to showcase my skills and experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group bg-gray-100 border-gray-700 rounded-lg  border-transparent overflow-hidden hover:border-[#FFBD20] transition duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-gray-900">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </div>

              {/* Project Info */}
              <div className="p-6 backdrop-blur-md border border-white/20">
                <h3 className="text-xl font-bold mb-2 text-[#ffb300] transition ">
                  {project.title}
                </h3>
                <p className="text-gray-800 text-sm mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="text-xs text-gray-100 bg-[#FFBD20] text-[#FFBD20] px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-black hover:text-[#FFBD20] transition"
                  >
                    <FaGithub  className=""/> Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-black hover:text-[#FFBD20] transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

     
    </div>
  )
}
