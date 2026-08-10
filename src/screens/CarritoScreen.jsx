import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/Buttons/CustomButton";
import { useAuth } from "../hooks/useAuth";

export default function CarritoScreen() {
  const { logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito</Text>
      <Text style={styles.caption}>Tu carrito aparecera aqui.</Text>

      <View style={styles.logoutContainer}>
        <CustomButton textButton="Cerrar sesion" actionButton={logout} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF5EE",
    paddingHorizontal: 24,
    paddingTop: 34,
  },
  title: {
    color: "#6F3E1F",
    fontSize: 30,
    fontWeight: "800",
  },
  caption: {
    marginTop: 10,
    color: "#875F42",
    fontSize: 15,
  },
  logoutContainer: {
    marginTop: 24,
    maxWidth: 210,
  },
});
