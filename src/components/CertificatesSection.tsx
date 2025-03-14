import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award } from 'lucide-react';
import { IoIosCloseCircle } from "react-icons/io";
import CERTIFICATE1 from "../assets/Certificates/Cert1.jpg";
import CERTIFICATE2 from '../assets/Certificates/Cert2.jpg'
import CERTIFICATE3 from '../assets/Certificates/Cert3.jpg'
import CERTIFICATE4 from '../assets/Certificates/Cert4.jpg'
import CERTIFICATE5 from '../assets/Certificates/Cert5.jpg'

const certificates = [
    {
        title: "",
        issuer: "Zensar",
        date: "",
        description: "",
        image: CERTIFICATE1
    },
    {
        title: "",
        issuer: "Ranjana Enterprises",
        date: "",
        description: "",
        image: CERTIFICATE2
    },
    {
        title: "",
        issuer: "DPU",
        date: "",
        description: "",
        image: CERTIFICATE3
    },
    {
        title: "",
        issuer: "GeeksForGeeks",
        date: "",
        description: "",
        image: CERTIFICATE4
    },
    {
        title: "",
        issuer: "DPU",
        date: "",
        description: "",
        image: CERTIFICATE5
    }
];

const CertificatesSection: React.FC = () => {
    const [certificatesRef, certificatesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const openModal = (image: string) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedImage(null);
    };

    return (
        <motion.section
            ref={certificatesRef}
            initial="hidden"
            animate={certificatesInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="pb-20 px-4 bg-black"
        >
            <div className="container mx-auto max-w-6xl">
                <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-12 flex items-center gap-2">
                    <Award className="text-purple-400" />
                    Achievements & Certificates
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {certificates.map((certificate, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ scale: 1.02 }}
                            className="bg-gradient-to-br from-purple-800/20 to-black rounded-xl p-6 rotating-border"
                        >
                            {certificate.image && (
                                <img
                                    src={certificate.image}
                                    alt={certificate.title}
                                    className="w-full h-48 mb-4 rounded cursor-pointer"
                                    onClick={() => openModal(certificate.image)}
                                />
                            )}
                            <h3 className="text-xl font-bold mb-2">{certificate.title}</h3>
                            <p className="text-gray-400 mb-1"><strong>Issuer:</strong> {certificate.issuer}</p>
                            {certificate.date && <p className="text-gray-400 mb-4"><strong>Date:</strong> {certificate.date}</p>}
                            <p className="text-gray-300">{certificate.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {modalIsOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={closeModal} // Closes modal when clicking outside
                >
                    <div
                        className="relative bg-white p-2 rounded-lg max-w-3xl mx-auto"
                        onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-0 right-0 mt-2 mr-2 text-black text-2xl"
                        >
                            <IoIosCloseCircle className="text-red-400" />
                        </button>
                        <img src={selectedImage!} alt="Certificate" className="h-[90vh]" />
                    </div>
                </div>
            )}
        </motion.section>
    );
};

export default CertificatesSection;
