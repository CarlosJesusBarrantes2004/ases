import { Suspense } from "react";
import VerifyEmailForm from "./VerifyEmailForm";

export const dynamic = "force-dynamic";

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <VerifyEmailForm></VerifyEmailForm>
    </Suspense>
  );
}
