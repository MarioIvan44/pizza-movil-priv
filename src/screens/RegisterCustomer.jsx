import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import CustomButton from "../components/Buttons/CustomButton";
import { useRegisterCustomerForm } from "../hooks/useRegisterCustomerForm";

export default function RegisterCustomer({ onBack, onContinueVerification }) {
  const { form, updateField, loading, error, success, submitRegistration } =
    useRegisterCustomerForm();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const passwordsMatch =
    form.confirmPassword && form.password === form.confirmPassword;

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);

    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split("T")[0];
      updateField("birthdate", formattedDate);
    }
  };

  const handleSubmit = async () => {
    const result = await submitRegistration();

    if (result?.ok && onContinueVerification) {
      onContinueVerification(form);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>
          <Text style={styles.title}>Crear cuenta</Text>
          <Text style={styles.subtitle}>
            Completa tus datos y te enviaremos un código para verificar tu
            correo electrónico.
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={form.name}
            onChangeText={(value) => updateField("name", value)}
            placeholderTextColor="#A77B5D"
          />

          <TextInput
            style={styles.input}
            placeholder="Apellido"
            value={form.lastName}
            onChangeText={(value) => updateField("lastName", value)}
            placeholderTextColor="#A77B5D"
          />

          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={styles.dateText}>
              {form.birthdate ? form.birthdate : "Fecha de nacimiento"}
            </Text>
          </TouchableOpacity>

          {showDatePicker ? (
            <DateTimePicker
              value={
                form.birthdate
                  ? new Date(`${form.birthdate}T12:00:00`)
                  : new Date()
              }
              mode="date"
              display="default"
              maximumDate={new Date()}
              onChange={handleDateChange}
            />
          ) : null}

          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            value={form.email}
            keyboardType="email-address"
            onChangeText={(value) => updateField("email", value)}
            autoCapitalize="none"
            placeholderTextColor="#A77B5D"
          />

          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={form.password}
            secureTextEntry
            onChangeText={(value) => updateField("password", value)}
            placeholderTextColor="#A77B5D"
          />

          <TextInput
            style={styles.input}
            placeholder="Confirmar contraseña"
            value={form.confirmPassword}
            secureTextEntry
            onChangeText={(value) => updateField("confirmPassword", value)}
            placeholderTextColor="#A77B5D"
          />

          {form.confirmPassword ? (
            <Text
              style={
                passwordsMatch ? styles.passwordMatch : styles.passwordMismatch
              }
            >
              {passwordsMatch
                ? "Las contraseñas coinciden."
                : "Las contraseñas no coinciden."}
            </Text>
          ) : null}

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
            textButton="Enviar código"
            actionButton={handleSubmit}
          />
          <CustomButton textButton="Volver al login" actionButton={onBack} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF5EE",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  card: {
    width: "100%",
    maxWidth: 340,
    alignSelf: "center",
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
  dateButton: {
    backgroundColor: "#FFF",
    width: "100%",
    borderWidth: 1,
    borderColor: "#DFC9B2",
    borderRadius: 8,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginVertical: 10,
    justifyContent: "center",
  },
  dateText: {
    color: "#A77B5D",
    fontWeight: "600",
  },
  passwordMatch: {
    marginTop: -4,
    marginBottom: 4,
    color: "#1E7A46",
    fontSize: 12,
    fontWeight: "600",
  },
  passwordMismatch: {
    marginTop: -4,
    marginBottom: 4,
    color: "#B12929",
    fontSize: 12,
    fontWeight: "600",
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
});
