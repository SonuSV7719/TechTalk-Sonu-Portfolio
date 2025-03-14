import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, ExternalLink, CheckCircle, Github } from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PROJ11 from '../assets/Projects/Project1/IMG1.png'
import PROJ12 from '../assets/Projects/Project1/IMG2.png'
import PROJ13 from '../assets/Projects/Project1/IMG3.png'

import PROJ21 from '../assets/Projects/Project2/IMG1.jpg'
import PROJ22 from '../assets/Projects/Project2/IMG2.jpg'
import PROJ23 from '../assets/Projects/Project2/IMG3.jpg'
import PROJ24 from '../assets/Projects/Project2/IMG4.jpg'

import PROJ31 from '../assets/Projects/Project3/IMG1.png'
import PROJ32 from '../assets/Projects/Project3/IMG2.png'

import PROJ41 from '../assets/Projects/Project4/IMG1.jpg'
import PROJ42 from '../assets/Projects/Project4/IMG2.jpg'
import PROJ43 from '../assets/Projects/Project4/IMG3.jpg'
import PROJ44 from '../assets/Projects/Project4/IMG4.jpg'
import PROJ45 from '../assets/Projects/Project4/IMG5.jpg'
import PROJ46 from '../assets/Projects/Project4/IMG6.jpg'
import './style.css'

const projects = [
    {
        title: "Codexa AI - Full Stack Developer Application",
        description: [
            "Developed Codexa AI, a full-stack developer application that generates a complete React app based on user prompts.",
            "Integrated AI-driven scaffolding to automate React component generation, enhancing development efficiency.",
            "Generated projects can be exported as ZIP files for easy sharing and deployment."
        ],
        tech: ["Vite", "Tailwind CSS", "Gemini AI", "React", "Node.js"],
        externalLink: "",
        githubLink: "https://github.com/SonuSV7719/Codexa-AI---Fullstack-Developer",
        images: [
            PROJ11, PROJ12, PROJ13
        ]
    },
    {
        title: "Gavathilang - Marathi Toy Programming Language",
        description: ["Created a culturally inclusive programming language with Marathi-like syntax.",
            "Developed a hybrid language supporting both Gavathilang and Python syntax."],
        tech: ["Next.js", "JavaScript", "Tailwind CSS", "Python", "Flask"],
        externalLink: "https://gavathilang.vercel.app/",
        githubLink: "https://github.com/SonuSV7719/Gavathilang-Website",
        images: [
            PROJ21, PROJ22, PROJ23, PROJ24
        ]
    },
    {
        title: "BioClassify - App to classify fingerprint in different categories",
        description: [
            "Developed a React Native mobile app for ICMR project, employing transfer learning (ResNetInceptionNetV3) to classify fingerprints into five categories (Left Loop, Right Loop, Whorl, Plain Arch, Tented Arch).",
            "Key Achievements:",
            "Achieved high accuracy with limited data using transfer learning.",
            "Ensured a user-friendly interface with React Native.",
            "Implemented a Flask API for model deployment.",
            "Client Project: Indian Council of Medical Research (ICMR)"
        ],
        tech: ["Python", "TensorFlow", "Deep Learning", "React Native", "Flask", "Typescript", "Firebase"],
        externalLink: "",
        githubLink: "",
        images: [
            PROJ31, PROJ32
        ]
    },
    {
        title: "Engineering Products Website",
        description: [
            "Designed and developed a dynamic website for Teknik Engineering, allowing the admin to manage product images and details via an admin panel.",
            "Key Features:",
            "- Secure Admin Panel for product management (add, edit, delete images).",
            "- Responsive and optimized UI for seamless user experience.",
            "- Firebase integration for real-time database updates.",
            "- Scalable architecture to accommodate future enhancements."
        ],
        tech: ["React JS", "TypeScript", "Firebase", "Tailwind CSS"],
        externalLink: "https://teknik-engineering.web.app/",
        githubLink: "",
        images: [PROJ41, PROJ42, PROJ43, PROJ44, PROJ45, PROJ46]
    }

];

interface NextArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

const NextArrow: React.FC<NextArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', borderRadius: '50%', zIndex: 1, marginRight: '2.5rem', backgroundColor: 'purple' }}
            onClick={onClick}
        >
            →
        </div>
    );
};

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

const PrevArrow: React.FC<ArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', borderRadius: '50%', zIndex: 1, marginLeft: '2.5rem', backgroundColor: 'purple' }}
            onClick={onClick}
        >
            ←
        </div>
    );
};

const ProjectsSection: React.FC = () => {
    const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <motion.section
            ref={projectsRef}
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="pb-20 px-4 bg-black"
        >
            <div className="container mx-auto max-w-6xl">
                <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-12 flex items-center gap-2">
                    <Code2 className="text-purple-400" />
                    Featured Projects
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ scale: 1.02 }}
                            className="bg-gradient-to-br from-purple-900/20 to-black rounded-xl overflow-hidden rotating-border"
                        >
                            {project.images.length > 1 ? (
                                <Slider {...settings}>
                                    {project.images.map((image, i) => (
                                        <div key={i}>
                                            <img src={image} alt={project.title} className="w-full h-72" />
                                        </div>
                                    ))}
                                </Slider>
                            ) : (
                                <img src={project.images[0]} alt={project.title} className="w-full h-74" />
                            )}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                                <div className="text-gray-400 mb-4">
                                    {project.description.map((desc, index) => (
                                        <div key={index} className="flex gap-3 mb-2">
                                            <span><CheckCircle className="text-green-500 mt-[5px]" size={16} /></span>
                                            <p> {desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-purple-900/30 rounded-full text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-6 flex gap-4">
                                    {project.externalLink &&
                                        <a href={project.externalLink} className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300" target='_blank'>
                                            View Project <ExternalLink size={16} />
                                        </a>
                                    }
                                    {project.githubLink &&
                                        <a href={project.githubLink} className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300" target='_blank'>
                                            GitHub <Github size={16} />
                                        </a>
                                    }
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default ProjectsSection;