import { Suspense } from "react";
import VerifyEmailForm from "./components/form/VerifyEmailForm";

export const dynamic = "force-dynamic";

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <div className="flex min-h-screen items-center justify-center">
        <VerifyEmailForm></VerifyEmailForm>
      </div>
    </Suspense>
  );
}
