import { useState } from "react";
import { useAuth } from "./useAuth";

export function useVerifyRecoveryCode() {
  const { verifyRecoveryCode } = useAuth();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async () => {
    setError("");

    // Normalizamos a minúsculas porque el código generado en el backend
    // es hexadecimal (puede incluir letras a-f) y la comparación es exacta.
    const normalizedCode = code.trim().toLowerCase();

    if (!normalizedCode) {
      setError("Debes ingresar el código que enviamos a tu correo");
      return { ok: false };
    }

    try {
      setLoading(true);
      await verifyRecoveryCode({ code: normalizedCode });
      return { ok: true };
    } catch (requestError) {
      setError(requestError.message || "No se pudo verificar el código");
      return { ok: false };
    } finally {
      setLoading(false);
    }
  };

  return {
    code,
    setCode,
    loading,
    error,
    submit,
  };
}
