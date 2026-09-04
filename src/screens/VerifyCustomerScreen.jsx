import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import CustomButton from "../components/Buttons/CustomButton";
import { useRegisterCustomerForm } from "../hooks/useRegisterCustomerForm";

export default function VerifyCustomerScreen({
  registrationData,
  onBack,
  onFinish,
}) {
  const {
    verificationCode,
    setVerificationCode,
    loading,
    error,
    success,
    verifyAndLogin,
  } = useRegisterCustomerForm(registrationData);

  const handleVerify = async () => {
    const isVerified = await verifyAndLogin();

    if (isVerified) {
      if (onFinish) {
        onFinish();
      }
    }
  };

  if (!registrationData) {
    return (
      <View style={styles.emptyState}>
        <Text style={styles.emptyTitle}>No hay datos de registro.</Text>
        <Text style={styles.emptyText}>
          Vuelve a la pantalla de registro para completar tus datos.
        </Text>
        {onBack ? (
          <CustomButton textButton="Volver" actionButton={onBack} />
        ) : null}
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Verifica tu correo</Text>
        <Text style={styles.subtitle}>
          Hemos enviado un código a {registrationData.email}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Código de verificación"
          value={verificationCode}
          onChangeText={setVerificationCode}
          placeholderTextColor="#A77B5D"
          autoCapitalize="none"
          autoCorrect={false}
        />

        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        {success ? <Text style={styles.successText}>{success}</Text> : null}

        {loading ? (
          <ActivityIndicator
            size="small"
            color="#C26D3B"
            style={styles.loader}
          />
        ) : null}

        <CustomButton
          textButton="Confirmar cuenta"
          actionButton={handleVerify}
        />
        <CustomButton textButton="Editar datos" actionButton={onBack} />
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
  input: {
    backgroundColor: "#FFF",
    color: "#2A1A10",
    fontWeight: "600",
    width: "100%",
    borderWidth: 1,
    borderColor: "#DFC9B2",
    borderRadius: 8,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginVertical: 10,
  },
  errorText: {
    marginTop: 4,
    color: "#B12929",
    fontSize: 13,
    fontWeight: "600",
  },
  successText: {
    marginTop: 4,
    color: "#1E7A46",
    fontSize: 13,
    fontWeight: "600",
  },
  loader: {
    marginTop: 10,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FAF5EE",
  },
  emptyTitle: {
    color: "#6F3E1F",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
  },
  emptyText: {
    color: "#7A4E32",
    textAlign: "center",
    marginBottom: 12,
  },
});
