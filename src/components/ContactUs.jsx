import { useState } from "react"
import { motion } from "framer-motion"
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"


function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        setTimeout(() => {
            setSubmitStatus("success")
            setFormData({ name: "", email: "", subject: "", message: "" })
            setIsSubmitting(false)
            setTimeout(() => setSubmitStatus(null), 5000)
        }, 1000)
    }

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            label: "Email",
            value: "yasir.mohd9720@gmail.com",
            link: "mailto:yasir.mohd9720@gmail.com",
        },
        {
            icon: <FaPhone />,
            label: "Phone",
            value: "+91 9720823331",
            link: "tel:+911234567890",
        },
        {
            icon: <FaMapMarkerAlt />,
            label: "Location",
            value: "Greater Noida,India",
            link: "#",
        },
    ]

    return (
        <div className="min-h-screen  text-white">


            <div className="md:w-9/12 w-full p-[20px] md:p-0 md:mx-auto py-12">
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Get in <span className="text-[#FFBD20]">Touch</span>
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#FFBD20] to-transparent"></div>
                    <p className="text-gray-400 text-lg mt-4">
                        Let's discuss your next amazing project. I'm always open to new opportunities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                        {contactInfo.map((info, index) => (
                            <motion.a
                                key={index}
                                href={info.link}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-4 p-4 bg-gray-200 border border-gray-700 rounded-lg hover:border-[#FFBD20] transition"
                            >
                                <div className="text-[#FFBD20] text-2xl flex-shrink-0">{info.icon}</div>
                                <div>
                                    <p className="text-gray-900 text-sm">{info.label}</p>
                                    <p className="text-[#FFBD20] font-semibold">{info.value}</p>
                                </div>
                            </motion.a>
                        ))}

                        {/* Social Links */}
                        <div className="pt-6">
                            <h3 className="text-[#FFBD20] font-bold mb-4">Follow Me</h3>
                            <div className="flex gap-4">
                                {[
                                    { name: "GitHub", link: "https://github.com/YaSi9R" },
                                    { name: "LinkedIn", link: "https://www.linkedin.com/in/mohd-yasir-5b4ba9288" },
                                    { name: "LeetCode", link: "https://leetcode.com/u/Yasir12" },
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        className="px-4 py-2 bg-[#FFBD20]/10 border border-[#FFBD20]/30 text-[#FFBD20] rounded hover:bg-[#FFBD20]/20 transition"
                                    >
                                        {social.name}
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="space-y-4"
                    >
                        <div>
                            <label className="block text-gray-300 mb-2 font-semibold">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-gray-200 border border-gray-700 rounded-lg focus:border-[#FFBD20] focus:outline-none transition text-gray-900"
                                placeholder="Your Name"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-300 mb-2 font-semibold">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-gray-200 border border-gray-700 rounded-lg focus:border-[#FFBD20] focus:outline-none transition text-gray-900"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-300 mb-2 font-semibold">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-gray-200 border border-gray-700 rounded-lg focus:border-[#FFBD20] focus:outline-none transition text-gray-900"
                                placeholder="Project Discussion"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-300 mb-2 font-semibold">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-4 py-3 bg-gray-200 border border-gray-700 rounded-lg focus:border-[#FFBD20] focus:outline-none transition text-gray-900 resize-none"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>

                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full px-6 py-3 bg-[#FFBD20] text-gray-950 font-bold rounded-lg hover:bg-yellow-400 transition disabled:opacity-50"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </motion.button>

                        {submitStatus === "success" && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 bg-green-500/20 border border-green-500 text-green-300 rounded-lg text-center"
                            >
                                Message sent successfully! I'll get back to you soon.
                            </motion.div>
                        )}
                    </motion.form>
                </div>
            </div>


        </div>
    )
}

export default ContactUs
