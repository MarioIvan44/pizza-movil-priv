import React from "react";
import {
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    View,
} from "react-native";
import CustomButton from "../components/Buttons/CustomButton";
import InputEmail from "../components/Inputs/InputEmail";
import { useForgotPassword } from "../hooks/useForgotPassword";

export default function ForgotPasswordScreen({ onBack }) {
    const { email, setEmail, loading, error, submit } = useForgotPassword();

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
            <View style={styles.card}>
                <Text style={styles.title}>Recuperar contraseña</Text>
                <Text style={styles.subtitle}>
                    Ingresa tu correo electrónico para recuperar tu contraseña
                </Text>

                <InputEmail
                    placeHolder="Correo"
                    setValor={email}
                    setTextChange={setEmail}
                    setEditable={!loading}
                />

                {error ? <Text style={styles.errorText}>{error}</Text> : null}

                {loading ? (
                    <ActivityIndicator
                        size="small"
                        color="#C26D3B"
                        style={styles.loader}
                    />
                ) : null}

                <CustomButton textButton="Recuperar" actionButton={submit} />
                <CustomButton textButton="Volver al login" actionButton={onBack} />
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