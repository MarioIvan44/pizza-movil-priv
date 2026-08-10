import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import InputEmail from "../components/Inputs/InputEmail";
import InputPassword from "../components/Inputs/InputPassword";
import CustomButton from "../components/Buttons/CustomButton";
import { useLoginForm } from "../hooks/useLoginForm";

export default function LoginScreen() {
  const { email, setEmail, password, setPassword, loading, error, submit } =
    useLoginForm();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Iniciar sesion</Text>
        <Text style={styles.subtitle}>Bienvenido a tu app de pizzas</Text>

        <InputEmail
          placeHolder="Correo"
          setValor={email}
          setTextChange={setEmail}
          setEditable={!loading}
        />

        <InputPassword
          placeHolder="Contrasena"
          setValor={password}
          contra
          setTextChange={setPassword}
        />

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        {loading ? (
          <ActivityIndicator
            size="small"
            color="#C26D3B"
            style={styles.loader}
          />
        ) : null}

        <CustomButton textButton="Entrar" actionButton={submit} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAF5EE",
    paddingHorizontal: 20,
  },
  card: {
    width: "100%",
    maxWidth: 340,
    backgroundColor: "#FFFDF8",
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingVertical: 26,
    borderWidth: 1,
    borderColor: "#E9D8C3",
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#6F3E1F",
  },
  subtitle: {
    marginTop: 6,
    marginBottom: 14,
    fontSize: 14,
    color: "#9A6A47",
  },
  errorText: {
    marginTop: 4,
    color: "#B12929",
    fontSize: 13,
    fontWeight: "600",
  },
  loader: {
    marginTop: 10,
  },
});
