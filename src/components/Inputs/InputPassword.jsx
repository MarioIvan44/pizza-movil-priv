import { StyleSheet, TextInput, Platform } from "react-native";

export default function InputPassword({
  placeHolder,
  setValor,
  contra,
  setTextChange,
}) {
  return (
    <TextInput
      style={styles.Input}
      placeholder={placeHolder}
      value={setValor}
      placeholderTextColor={"#A77B5D"}
      secureTextEntry={contra}
      onChangeText={setTextChange}
    />
  );
}

const styles = StyleSheet.create({
  Input: {
    backgroundColor: "#FFF",
    color: "#2A1A10",
    fontWeight: "600",
    width: "100%",
    height: Platform.OS === "ios" ? 50 : 50, // Estilo de la barra de pestañas, altura diferente para iOS y Android
    borderWidth: 1,
    borderColor: "#DFC9B2",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
