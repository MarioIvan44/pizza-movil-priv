import { useState } from "react";
import { useAuth } from "./useAuth";

export function useForgotPassword() {
  const { forgotPasswordSendEmail } = useAuth();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

    const submit = async () => {
    setError("");

    if (!email.trim()) {
      setError("Debes ingresar un correo electrónico");
      return { ok: false };
    }

    try {
      setLoading(true);
      await forgotPasswordSendEmail({ email });
      return { ok: true };
    } catch (requestError) {
      setError(requestError.message || "No se pudo enviar el correo de recuperación");
      return { ok: false };
    } finally {
      setLoading(false);
    }
    };

    return {
    email,
    setEmail,
    loading,
    error,
    submit,
  };
}