import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, Phone, Youtube } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import PROFILE_IMG from '../assets/Profile/Profile_IMG.jpg';
import RESUME from '../assets/Sonu_Vishwakarma_SDE.pdf';

const HeroSection: React.FC = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true });
    const { scrollYProgress } = useScroll();
    const headerY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
    const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const text = useTypewriter({
        words: ["Full-Stack Developer", "Software Developer", "Frontend Developer", "Backend Developer", "AI-ML Enthusiast"],
        typingSpeed: 100,
        deletingSpeed: 50,
        delayBetweenWords: 2000
    });

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const floatingAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    const SocialLinks = [
        {
            href: "https://github.com/SonuSV7719",
            icon: <Github size={24} />
        },
        {
            href: "https://www.linkedin.com/in/sonusv/",
            icon: <Linkedin size={24} />
        },
        {
            href: "mailto:sonu.s.v.771984@gmail.com",
            icon: <Mail size={24} />
        },
        {
            href: "tel:+917719845226",
            icon: <Phone size={24} />
        },
        {
            href: "https://www.youtube.com/@techtalkwithsonu",
            icon: <Youtube size={24} />
        }
    ];


    return (
        <motion.section
            ref={heroRef}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 md:py-16 py-10"
        >
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0"
                style={{ y: headerY, opacity: headerOpacity }}
            />
            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div variants={fadeInUp} className="space-y-6">
                    <div className='flex flex-col md:flex-row gap-10 sm:gap-4 items-center justify-between '>
                        <div className='order-2 md:order-1'>
                            <motion.div animate={floatingAnimation} className="mb-8">
                                <motion.h1
                                    variants={fadeInUp}
                                    className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
                                >
                                    Hey, I'm Sonu
                                </motion.h1>
                                <motion.div className="text-lg sm:text-xl md:text-2xl text-purple-400 h-8 mt-4 flex items-center">
                                    I'm a {text}
                                    <motion.span
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                        className="ml-1"
                                    >
                                        |
                                    </motion.span>
                                </motion.div>
                            </motion.div>
                            <motion.p variants={fadeInUp} className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mb-4">
                                Worked with multiple programming languages and frameworks, and have a good understanding of both server-side and client-side technologies.
                            </motion.p>
                            <motion.div className='flex gap-4'>
                                {
                                    SocialLinks.map((link, index) => (
                                        <motion.div variants={fadeInUp} className="flex gap-4" key={index}>
                                            <motion.a href={link.href} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-purple-400 transition-colors" whileHover={{ scale: 1.5 }}>
                                                {link.icon}
                                            </motion.a>
                                        </motion.div>
                                    ))
                                }
                            </motion.div>
                        </div>
                        <div className='w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-80 lg:h-80 order-1 md:order-2'>
                            <img src={PROFILE_IMG} alt="PROFILE_IMG" className='rounded-full border-4 md:border-8 border-purple-500 w-full h-full object-cover' />
                        </div>
                    </div>
                    <motion.a
                        href={RESUME}
                        download
                        className="p-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors mt-4 inline-block"
                        whileHover={{ scale: 1.05 }}
                    >
                        Download Resume
                    </motion.a>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default HeroSection;