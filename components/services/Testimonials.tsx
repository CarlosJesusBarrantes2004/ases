"use client";

import { motion } from "framer-motion";

function Testimonials() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Lo que dicen nuestros clientes
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {/* Testimonio 1 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.6,
                },
              },
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="flex items-center mb-4">
              <motion.div
                className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mr-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.3,
                }}
              >
                LC
              </motion.div>
              <div>
                <h4 className="font-bold text-gray-900">Laura Campos</h4>
                <p className="text-sm text-gray-600">
                  Directora Financiera, Empresa A
                </p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "La asesoría financiera de Grupo Ases ha sido fundamental para
              optimizar nuestra estructura de costos. Logramos reducir gastos
              operativos en un 18% en solo seis meses."
            </p>
          </motion.div>

          {/* Testimonio 2 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                },
              },
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="flex items-center mb-4">
              <motion.div
                className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mr-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.4,
                }}
              >
                MR
              </motion.div>
              <div>
                <h4 className="font-bold text-gray-900">Marco Ramírez</h4>
                <p className="text-sm text-gray-600">CEO, Empresa B</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Su consultoría estratégica nos ayudó a identificar nuevas
              oportunidades de mercado que no habíamos considerado. El resultado
              fue un crecimiento del 25% en nuestro primer año de trabajo
              conjunto."
            </p>
          </motion.div>

          {/* Testimonio 3 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.6,
                },
              },
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="flex items-center mb-4">
              <motion.div
                className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mr-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.5,
                }}
              >
                CA
              </motion.div>
              <div>
                <h4 className="font-bold text-gray-900">Carolina Araya</h4>
                <p className="text-sm text-gray-600">
                  Gerente de Operaciones, Empresa C
                </p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "La implementación de los procesos optimizados ha mejorado
              significativamente nuestra eficiencia. Reducimos los tiempos de
              entrega en un 30% y mejoramos la satisfacción de nuestros
              clientes."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Testimonials;
