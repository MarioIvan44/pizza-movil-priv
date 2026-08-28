import { View } from "react-native/types_generated/index";
import { KeyboardAvoidingView } from "react-native/types_generated/index";
import CustomButton from "../components/Buttons/CustomButton";
import InputEmail from "../components/Inputs/InputEmail";

export default function ForgotPasswordScreen() {
    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : undefined}>
            <View style={styles.card}>
                <Text style={styles.title}>Recuperar contraseña</Text>
                <Text style={styles.subtitle}>Ingresa tu correo electrónico para recuperar tu contraseña</Text>
                <InputEmail
                    placeHolder="Correo"
                    setValor={email}
                    setTextChange={setEmail}
                    setEditable={!loading}
                />
                <CustomButton textButton="Recuperar" actionButton={submit} />
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
                {loading ? (
                    <ActivityIndicator
                        size="small"
                        color="#C26D3B"
                        style={styles.loader}
                    />
                ) : null}
            </View>
        </KeyboardAvoidingView>
    )
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
})