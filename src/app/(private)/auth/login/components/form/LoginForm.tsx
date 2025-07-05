"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { LoginFormValues, loginSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";

function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.ok) router.push("/dashboard");
      else
        toast.error(data.message || "Error al iniciar sesión.", {
          duration: 5000,
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Iniciar sesión</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="tu.email@ejemplo.com"
                      {...field}
                    ></Input>
                  </FormControl>
                  <FormMessage></FormMessage>
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="********"
                        {...field}
                        className="pr-10"
                      ></Input>
                    </FormControl>
                    <Button
                      type="button"
                      variant={"ghost"}
                      size={"sm"}
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent hover:cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-500"></EyeOff>
                      ) : (
                        <Eye className="h-4 w-4 text-gray-500"></Eye>
                      )}
                    </Button>
                  </div>
                  <FormMessage></FormMessage>
                </FormItem>
              )}
            ></FormField>
            <Button
              type="submit"
              disabled={loading}
              className="hover:cursor-pointer w-full"
            >
              {loading ? "Iniciando..." : "Iniciar Sesión"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col gap-y-1.5">
        <div className="text-center text-sm">
          <Link
            href="/auth/forgot-password"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
        <div className="text-center text-sm">
          ¿No has recibido el correo de verificación?{" "}
          <Link
            href="/auth/verify-email"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Reenviar
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}

export default LoginForm;
