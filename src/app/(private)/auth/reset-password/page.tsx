import { Suspense } from "react";
import ResetPasswordForm from "./components/form/ResetPasswordForm";

export const dynamic = "force-dynamic";

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <div className="flex min-h-screen items-center justify-center">
        <ResetPasswordForm></ResetPasswordForm>
      </div>
    </Suspense>
  );
}
