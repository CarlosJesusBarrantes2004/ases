"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  ChevronDown,
  Check,
  TriangleAlert,
  LoaderCircle,
} from "lucide-react";
import {
  ContactFormDefaultValues,
  ContactFormType,
  contactSchema,
  SERVICE_TYPES,
} from "./schema";

function ContactForm() {
  const defaultValues: ContactFormDefaultValues = {
    fullName: "",
    email: "",
    phone: "",
    typeService: "", // Ahora esto es válido gracias al tipo personalizado
    message: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    watch,
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema),
    defaultValues: defaultValues as any,
  });

  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });

  const [charCount, setCharCount] = useState(0);
  const message = watch("message");

  useEffect(() => {
    setCharCount(message ? message.length : 0);
  }, [message]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      const timer = setTimeout(() => {
        setSubmitStatus({ success: false, message: "" });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitSuccessful]);

  const onSubmit = async (data: ContactFormType) => {
    try {
      console.log("Datos enviados:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus({
        success: true,
        message:
          "¡message enviado con éxito! Nos pondremos en contacto pronto.",
      });
      reset();
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Ha ocurrido un error. Por favor, inténtalo de nuevo.",
      });
    }
  };

  return (
    <>
      {submitStatus.success ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center animate-fade-in">
          <div className="mx-auto w-12 h-12 flex items-center justify-center bg-green-100 rounded-full mb-4">
            <Check size={24} className="text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-green-800 mb-2">
            ¡Gracias por contactarnos!
          </h3>
          <p className="text-green-700">{submitStatus.message}</p>
          <button
            onClick={() => setSubmitStatus({ success: false, message: "" })}
            className="mt-4 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors cursor-pointer"
          >
            Enviar otro message
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 animate-fade-in"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-gray-700 font-medium mb-2 flex items-center text-sm"
              >
                <User size={16} className="mr-2 text-red-primary" />
                Nombre completo <span className="text-red-primary ml-1">*</span>
              </label>
              <input
                id="fullName"
                {...register("fullName")}
                className={`w-full px-4 py-3 text-gray-dark rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-primary ${
                  errors.fullName
                    ? "border-red-primary bg-red-50"
                    : "border-gray-200 focus:border-red-primary"
                }`}
                placeholder="Tu nombre completo"
              />
              {errors.fullName && (
                <p className="mt-1 text-red-primary text-sm flex gap-1.5 items-center">
                  <TriangleAlert size={16}></TriangleAlert>
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2 flex items-center text-sm"
              >
                <Mail size={16} className="mr-2 text-red-primary" />
                Correo electrónico{" "}
                <span className="text-red-primary ml-1">*</span>
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className={`w-full px-4 py-3 text-gray-dark rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-primary ${
                  errors.email
                    ? "border-red-primary bg-red-50"
                    : "border-gray-200 focus:border-red-primary"
                }`}
                placeholder="tu.email@ejemplo.com"
              />
              {errors.email && (
                <p className="mt-1 text-red-primary text-sm flex gap-1.5 items-center">
                  <TriangleAlert size={16}></TriangleAlert>
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 font-medium mb-2 flex items-center text-sm"
              >
                <Phone size={16} className="mr-2 text-red-primary" />
                Número de teléfono{" "}
                <span className="text-gray-400 ml-1 text-xs">(opcional)</span>
              </label>
              <input
                id="phone"
                type="tel"
                {...register("phone")}
                className="w-full px-4 py-3 text-gray-dark rounded-lg border border-gray-200 focus:border-red-primary focus:outline-none focus:ring-2 focus:ring-red-primary transition-all duration-300"
                placeholder="+51 XXX XXX XXX"
              />
            </div>

            <div>
              <label
                htmlFor="typeService"
                className="block text-gray-700 font-medium mb-2 flex items-center text-sm"
              >
                <ChevronDown size={16} className="mr-2 text-red-primary" />
                Tipo de servicio{" "}
                <span className="text-red-primary ml-1">*</span>
              </label>
              <div className="relative">
                <select
                  id="typeService"
                  {...register("typeService")}
                  className={`w-full px-4 py-3 text-gray-dark rounded-lg border appearance-none bg-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-primary ${
                    errors.typeService
                      ? "border-red-primary bg-red-50"
                      : "border-gray-200 focus:border-red-primary"
                  }`}
                >
                  <option value="" disabled>
                    Selecciona un servicio
                  </option>
                  {SERVICE_TYPES.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              {errors.typeService && (
                <p className="mt-1 text-red-primary text-sm flex gap-1.5 items-center">
                  <TriangleAlert size={28}></TriangleAlert>
                  {errors.typeService.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2 flex items-center text-sm"
            >
              <MessageSquare size={16} className="mr-2 text-red-primary" />
              Mensaje <span className="text-red-primary ml-1">*</span>
            </label>
            <textarea
              id="message"
              {...register("message")}
              rows={5}
              className={`w-full px-4 py-3 text-gray-dark rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-primary ${
                errors.message
                  ? "border-red-primary bg-red-50"
                  : "border-gray-200 focus:border-red-primary"
              }`}
              placeholder="Cuéntanos cómo podemos ayudarte..."
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-red-primary text-sm flex gap-1.5 items-center">
                <TriangleAlert size={16}></TriangleAlert>
                {errors.message.message}
              </p>
            )}
            <div className="text-right text-gray-400 text-xs mt-1">
              <span id="charCount">{charCount}</span>/500
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="politicaPrivacidad"
              className="h-4 w-4 text-red-primary rounded border-gray-300 focus:ring-red-primary"
              required
            />
            <label
              htmlFor="politicaPrivacidad"
              className="ml-2 block text-sm text-gray-700"
            >
              He leído y acepto la{" "}
              <a
                href="#"
                className="text-red-primary font-medium hover:underline"
              >
                política de privacidad
              </a>
            </label>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-primary hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <LoaderCircle className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"></LoaderCircle>
                  <span>Enviando...</span>
                </div>
              ) : (
                <>
                  <Send size={16} className="mr-2" />
                  Enviar message
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default ContactForm;
