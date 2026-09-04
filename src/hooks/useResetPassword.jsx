import { useState } from "react";
import { useAuth } from "./useAuth";

export function useResetPassword() {
  const { resetPassword } = useAuth();
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const submit = async () => {
    setError("");
    setSuccess("");

    if (!newPassword || !confirmNewPassword) {
      setError("Debes completar ambos campos de contraseña");
      return { ok: false };
    }

    if (newPassword !== confirmNewPassword) {
      setError("Las contraseñas no coinciden");
      return { ok: false };
    }

    if (newPassword.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return { ok: false };
    }

    try {
      setLoading(true);
      const result = await resetPassword({ newPassword, confirmNewPassword });
      setSuccess(result?.message ?? "Contraseña actualizada correctamente");
      return { ok: true };
    } catch (requestError) {
      setError(requestError.message || "No se pudo actualizar la contraseña");
      return { ok: false };
    } finally {
      setLoading(false);
    }
  };

  return {
    newPassword,
    setNewPassword,
    confirmNewPassword,
    setConfirmNewPassword,
    loading,
    error,
    success,
    submit,
  };
}
