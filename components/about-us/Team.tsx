"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const teamMembers = [
  {
    name: "Carlos Mendoza",
    position: "Director General",
    bio: "Con más de 20 años de experiencia en consultoría estratégica, Carlos ha liderado proyectos para empresas Fortune 500 antes de fundar Grupo Ases.",
    image: "/placeholder-profile.jpg", // Reemplazar con imagen real
  },
  {
    name: "María Fernández",
    position: "Directora de Consultoría",
    bio: "MBA con especialización en desarrollo organizacional, María ha transformado la forma en que nuestros clientes gestionan el cambio empresarial.",
    image: "/placeholder-profile.jpg", // Reemplazar con imagen real
  },
  {
    name: "Alejandro Torres",
    position: "Director Financiero",
    bio: "Experto en finanzas corporativas con certificación CFA, Alejandro ha optimizado la estructura financiera de más de 150 empresas.",
    image: "/placeholder-profile.jpg", // Reemplazar con imagen real
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
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

function Team() {
  return (
    <div id="equipo" className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nuestro Equipo Directivo
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Conoce a los profesionales que lideran Grupo Ases y aportan su
            experiencia para el éxito de nuestros clientes.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              variants={scaleIn}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="bg-gray-300 h-64 flex items-center justify-center">
                {/* Reemplazar con imagen real */}
                <p className="text-gray-500">Foto de {member.name}</p>
              </div>
              <motion.div
                className="p-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  {member.position}
                </p>
                <p className="text-gray-700">{member.bio}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <p className="text-gray-700 mb-6">
            Respaldados por un equipo multidisciplinario de más de 50
            consultores especializados en diferentes áreas e industrias.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contacto"
              className="inline-block bg-blue-600 text-white font-medium px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Contáctanos
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Team;
