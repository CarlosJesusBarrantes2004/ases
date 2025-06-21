import { Suspense } from "react";
import VerifyAndSetPasswordForm from "./VerifyAndSetPasswordForm";

export const dynamic = "force-dynamic";

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <VerifyAndSetPasswordForm></VerifyAndSetPasswordForm>
    </Suspense>
  );
}
