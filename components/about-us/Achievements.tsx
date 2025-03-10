"use client";

import { motion } from "framer-motion";
import { FaBuilding, FaCheckCircle, FaTrophy, FaUserTie } from "react-icons/fa";

const achievements = [
  {
    icon: <FaCheckCircle className="w-12 h-12 text-blue-600"></FaCheckCircle>,
    number: "500+",
    text: "Proyectos Completados",
  },
  {
    icon: <FaUserTie className="w-12 h-12 text-blue-600"></FaUserTie>,
    number: "95%",
    text: "Clientes Satisfechos",
  },
  {
    icon: <FaBuilding className="w-12 h-12 text-blue-600"></FaBuilding>,
    number: "300+",
    text: "Empresas Asesoradas",
  },
  {
    icon: <FaTrophy className="w-12 h-12 text-blue-600"></FaTrophy>,
    number: "15+",
    text: "Años de Experiencia",
  },
];

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
};

function Achievements() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
        >
          Nuestros Logros
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {achievements.map((achievement, index) => (
            <motion.div key={index} className="text-center" variants={scaleIn}>
              <motion.div
                className="flex justify-center mb-4"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 },
                }}
              >
                {achievement.icon}
              </motion.div>
              <motion.h3
                className="text-4xl font-bold text-gray-900 mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {achievement.number}
              </motion.h3>
              <motion.p
                className="text-gray-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {achievement.text}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Achievements;
