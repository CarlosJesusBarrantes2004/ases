import { Suspense } from "react";
import VerifyAndSetPasswordForm from "./components/form/VerifyAndSetPasswordForm";

export const dynamic = "force-dynamic";

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <div className="flex min-h-screen items-center justify-center">
        <VerifyAndSetPasswordForm></VerifyAndSetPasswordForm>
      </div>
    </Suspense>
  );
}
