"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ContactFormData, contactSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FaCheck, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoSend, IoMail } from "react-icons/io5";

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const services = [
    { value: "", label: "Seleccione un servicio" },
    { value: "consultoria-estrategica", label: "Consultoría Estratégica" },
    { value: "gestion-financiera", label: "Gestión Financiera" },
    { value: "transformacion-digital", label: "Transformación Digital" },
    { value: "recursos-humanos", label: "Recursos Humanos" },
    { value: "marketing", label: "Marketing y Ventas" },
    { value: "operaciones", label: "Operaciones y Procesos" },
  ];

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
  };

  const handleResetForm = () => {
    setSubmitSuccess(false);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {submitSuccess ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 text-center"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCheck className="w-8 h-8 text-green-600"></FaCheck>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            ¡Mensaje enviado!
          </h3>
          <p className="text-gray-600 mb-6">
            Gracias por contactarnos. Nos pondremos en contacto contigo a la
            brevedad posible.
          </p>
          <button
            onClick={handleResetForm}
            className="inline-block bg-blue-600 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Enviar otro mensaje
          </button>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-2 bg-gradient-to-br from-blue-900 to-blue-700 p-8 text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Ponte en contacto</h3>
            <p className="mb-8">
              Estamos listos para ayudarte a potenciar tu negocio. Completa el
              formulario y uno de nuestros asesores te contactará a la brevedad.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="w-5 h-5 mt-1 mr-3"></FaMapMarkerAlt>
                <div>
                  <p className="font-medium">Ubicación</p>
                  <p className="text-blue-100">Lora y Cordero 610, Chiclayo</p>
                </div>
              </div>
              <div className="flex items-start">
                <IoMail className="w-5 h-5 mt-1 mr-3"></IoMail>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-blue-100">contacto@grupoases.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaPhoneAlt className="w-5 h-5 mt-1 mr-3"></FaPhoneAlt>
                <div>
                  <p className="font-medium">Teléfono</p>
                  <p className="text-blue-100">+51 987 654 321</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nombre completo *
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Ingrese su nombre"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Ingrese su email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Teléfono *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Ingrese su teléfono"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Empresa
                  </label>
                  <input
                    id="company"
                    type="text"
                    {...register("company")}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                    placeholder="Ingrese su empresa"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Servicio de interés *
                </label>
                <select
                  id="service"
                  {...register("service")}
                  className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors ${
                    errors.service ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.service.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={4}
                  className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="¿Cómo podemos ayudarte?"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-300 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <IoSend className="w-4 h-4 mr-2"></IoSend>
                      <span>Enviar mensaje</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
