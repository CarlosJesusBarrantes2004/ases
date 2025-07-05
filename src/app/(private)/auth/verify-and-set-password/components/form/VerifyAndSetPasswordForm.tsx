"use client";

import { useForm } from "react-hook-form";
import {
  VerifyAndSetPasswordFormValues,
  verifyAndSetPasswordSchema,
} from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

function VerifyAndSetPasswordForm() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();

  useEffect(() => {
    if (!token)
      toast.error("Token de verificación no válido.", { duration: 5000 });
  }, [token]);

  const form = useForm<VerifyAndSetPasswordFormValues>({
    resolver: zodResolver(verifyAndSetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: VerifyAndSetPasswordFormValues) => {
    if (values.password !== values.confirmPassword)
      return toast.warning("Las contraseñas no coinciden.", { duration: 2000 });

    if (!token) return toast.error("Token no valido.", { duration: 5000 });

    setLoading(true);

    try {
      const res = await fetch("/api/auth/verify-and-set-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, newPassword: values.password }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(
          "Tu correo ha sido verificado y tu contraseña establecida.",
          { duration: 5000 }
        );
        router.push("/auth/login?verified=true");
      } else
        toast.error(
          data.message || "Error al verificar o establecer la contraseña.",
          { duration: 5000 }
        );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Establecer Nueva Contraseña</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirmar contraseña</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
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
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
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
              {loading ? "Estableciendo..." : "Establecer contraseña"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col">
        <div className="text-center text-sm">
          <Link
            href="/auth/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Volver al inicio de sesión
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}

export default VerifyAndSetPasswordForm;
