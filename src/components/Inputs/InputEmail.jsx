import { StyleSheet, TextInput, Platform } from "react-native";

export default function InputEmail({
  placeHolder,
  setValor,
  setTextChange,
  setEditable,
}) {
  return (
    <TextInput
      style={styles.Input}
      placeholder={placeHolder}
      value={setValor}
      placeholderTextColor={"#FFF"}
      onChangeText={setTextChange}
      keyboardType="email-address"
      editable={setEditable}
    />
  );
}

const styles = StyleSheet.create({
  Input: {
    backgroundColor: "#FFF",
    color: "#2A1A10",
    fontWeight: "600",
    width: "100%",
    borderWidth: 1,
    borderColor: "#DFC9B2",
    borderRadius: 8,
    padding: Platform.OS === "ios" ? 15 : 10, // Estilo de la barra de pestañas, altura diferente para iOS y Android,
    marginVertical: 10,
  },
});
