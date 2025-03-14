import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, CheckCircle } from 'lucide-react';

const experience = [
    {
        position: "Enterprise Automation Developer",
        company: "Xalta Technologies",
        date: "Feb 2024 - Present",
        description: [
            "Developed and maintained Xalta's product websites using the MERN stack.",
            "Enhanced Xalta's Bot Monitoring Solution by integrating dynamic Teams and Slack notifications, improving real-time monitoring.",
            "Implemented various monitoring cases (e.g., stuck queues, deployment failures, run failures) to streamline bot status checks.",
            "Utilized tools like A360 Automation Anywhere, UiPath, Python, and Mulesoft for automation and system integration."
        ],
        tech: ["MERN Stack", "UiPath", "Automation Anywhere", "Mulesoft", "Python"]
    },
    {
        position: "Full Stack Developer Intern",
        company: "Ranjana Enterprises",
        date: "Jan 2023 - Feb 2023",
        description: [
            "Developed an e-commerce website using ReactJS, NextJS, ExpressJS, GoLang, Tailwind CSS, and MongoDB.",
            "Implemented an image converter API to automate image size reduction and storage, reducing admin workload by 75%.",
            "Created an order tracking system for admins and users, enhancing user experience.",
            "Developed a review and rating page with automatic email notifications for product ratings."
        ],
        tech: ["ReactJS", "NextJS", "ExpressJS", "GoLang", "MongoDB", "Tailwind CSS"]
    }
];


const ExperienceSection: React.FC = () => {
    const [experienceRef, experienceInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.section
            ref={experienceRef}
            initial="hidden"
            animate={experienceInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="pb-20 px-4 bg-black"
        >
            <div className="container mx-auto max-w-6xl">
                <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-12 flex items-center gap-2">
                    <Briefcase className="text-purple-400" />
                    Experience
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ scale: 1.02 }}
                            className="bg-gradient-to-br from-purple-900/20 to-black rounded-xl p-6 rotating-border"
                        >
                            <h3 className="text-xl font-bold mb-2">{exp.position}</h3>
                            <p className="text-gray-400 mb-1"><strong>Company:</strong> {exp.company}</p>
                            <p className="text-gray-400 mb-4"><strong>Date:</strong> {exp.date}</p>
                            <div className='mb-8'>
                                {exp.description.map((desc, index) => (
                                    <div key={index} className="flex gap-3 mb-2">
                                        <span><CheckCircle className="text-green-500 mt-[5px]" size={16} /></span>
                                        <p> {desc}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 bg-purple-900/30 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default ExperienceSection;