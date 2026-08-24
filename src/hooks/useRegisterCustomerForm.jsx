import { useCallback, useEffect, useState } from "react";
import { useAuth } from "./useAuth";

const initialForm = {
  name: "",
  lastName: "",
  birthdate: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export function useRegisterCustomerForm(initialData = null) {
  const { register, verifyRegistrationCode, login } = useAuth();
  const [form, setForm] = useState({ ...initialForm, ...(initialData ?? {}) });
  const [verificationCode, setVerificationCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (initialData) {
      setForm({ ...initialForm, ...initialData });
    }
  }, [initialData]);

  const updateField = useCallback((field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }, []);

  const resetStatus = useCallback(() => {
    setError("");
    setSuccess("");
  }, []);

  const submitRegistration = useCallback(async () => {
    resetStatus();

    const trimmedEmail = form.email.trim();
    const trimmedName = form.name.trim();
    const trimmedLastName = form.lastName.trim();

    if (!trimmedName || !trimmedEmail || !form.password) {
      setError("Completa nombre, correo y contraseña para continuar.");
      return { ok: false };
    }

    if (form.password !== form.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return { ok: false };
    }

    if (form.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return { ok: false };
    }

    try {
      setLoading(true);
      const result = await register({
        ...form,
        name: trimmedName,
        lastName: trimmedLastName,
        email: trimmedEmail,
        isVerified: false,
        loginAttemps: 0,
        timeOut: null,
      });

      setSuccess(result?.message ?? "Código enviado a tu correo");
      return { ok: true, message: result?.message ?? "Código enviado" };
    } catch (requestError) {
      setError(requestError.message || "No se pudo iniciar el registro");
      return { ok: false };
    } finally {
      setLoading(false);
    }
  }, [form, register, resetStatus]);

  const verifyAndLogin = useCallback(async () => {
    resetStatus();

    if (!verificationCode.trim()) {
      setError("Ingresa el código de verificación.");
      return false;
    }

    try {
      setLoading(true);
      await verifyRegistrationCode({
        verificationCodeRequest: verificationCode.trim(),
      });

      await login({
        email: form.email,
        password: form.password,
      });

      setSuccess("Cuenta verificada. Sesión iniciada correctamente.");
      return true;
    } catch (requestError) {
      setError(requestError.message || "No se pudo verificar la cuenta");
      return false;
    } finally {
      setLoading(false);
    }
  }, [
    form.email,
    form.password,
    login,
    resetStatus,
    verificationCode,
    verifyRegistrationCode,
  ]);

  return {
    form,
    updateField,
    verificationCode,
    setVerificationCode,
    loading,
    error,
    success,
    submitRegistration,
    verifyAndLogin,
  };
}
