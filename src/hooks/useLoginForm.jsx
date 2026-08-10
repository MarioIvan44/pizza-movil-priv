import { useState } from "react";
import { useAuth } from "./useAuth";

export function useLoginForm() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async () => {
    setError("");

    if (!email.trim() || !password) {
      setError("Debes ingresar correo y contrasena");
      return;
    }

    try {
      setLoading(true);
      await login({ email, password });
    } catch (requestError) {
      setError(requestError.message || "No se pudo iniciar sesion");
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    submit,
  };
}
