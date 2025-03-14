import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Phone, Youtube } from 'lucide-react';

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


const Footer: React.FC = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="py-12 px-4 bg-gradient-to-t from-purple-900/20 to-black"
        >
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <motion.h3
                            className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
                            whileHover={{ scale: 1.05 }}
                        >
                            Let's Connect
                        </motion.h3>
                        <p className="text-gray-400">Open for exciting opportunities and collaborations</p>
                    </div>
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
                <motion.div
                    className="mt-8 pt-8 border-t border-purple-900/30 text-center text-gray-400 text-sm flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                >
                    Made with <Heart size={16} className="text-purple-400" /> by Sonu Vishwakarma © {new Date().getFullYear()}
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;