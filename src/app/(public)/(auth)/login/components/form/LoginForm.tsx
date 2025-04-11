"use client";

import { useForm } from "react-hook-form";
import { LoginFormDefaultValues, LoginFormType, loginSchema } from "./schema";
import { TriangleAlert } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

function LoginForm() {
  const defaultValues: LoginFormDefaultValues = {
    username: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormType>({
    defaultValues,
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormType) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log(response);
      } else {
        const json = await response.json();
        console.log(json);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md animate-slide-up">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4 items-center w-full"
      >
        <h1 className="text-2xl font-bold mb-2 text-black-soft">
          Iniciar sesión
        </h1>
        <div className="w-full">
          <label
            htmlFor="username"
            className="block text-sm text-gray-dark mb-1"
          >
            Nombre de usuario
          </label>
          <input
            id="username"
            type="text"
            placeholder="Ingrese su usuario"
            {...register("username")}
            className={`w-full px-4 py-2 text-gray-dark rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-primary ${
              errors.username
                ? "border-red-primary bg-red-50"
                : "border-gray-200 focus:border-red-primary"
            }`}
            disabled={isSubmitting}
          />
          {errors.username && (
            <p className="mt-1 text-red-primary text-sm flex gap-1.5 items-center">
              <TriangleAlert size={16}></TriangleAlert>
              {errors.username.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <label
            htmlFor="password"
            className="block text-sm text-gray-dark mb-1"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="Ingrese su usuario"
            {...register("password")}
            className={`w-full px-4 py-2 text-gray-dark rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-primary ${
              errors.password
                ? "border-red-primary bg-red-50"
                : "border-gray-200 focus:border-red-primary"
            }`}
            disabled={isSubmitting}
          />
          {errors.password && (
            <p className="mt-1 text-red-primary text-sm flex gap-1.5 items-center">
              <TriangleAlert size={16}></TriangleAlert>
              {errors.password.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 px-4 py-2 cursor-pointer rounded-md bg-black-soft text-white hover:bg-opacity-90 transition-all-300 flex justify-center"
        >
          {isSubmitting ? (
            <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
          ) : (
            "Iniciar sesión"
          )}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
