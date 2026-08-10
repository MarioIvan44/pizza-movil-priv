import { Image, StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/coffeeshop-splash.png")}
        style={styles.splashImage}
        resizeMode="cover"
      />
      <View style={styles.overlay}>
        <Text style={styles.title}>Pizza House</Text>
        <Text style={styles.subtitle}>Horneando tu experiencia</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B160A",
    justifyContent: "center",
    alignItems: "center",
  },
  splashImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  overlay: {
    paddingHorizontal: 28,
    paddingVertical: 20,
    borderRadius: 12,
    backgroundColor: "rgba(43, 22, 10, 0.58)",
    alignItems: "center",
  },
  title: {
    color: "#FFF4E8",
    fontSize: 38,
    fontWeight: "800",
    letterSpacing: 1,
  },
  subtitle: {
    marginTop: 8,
    color: "#F3D3B8",
    fontSize: 16,
    fontWeight: "600",
  },
});
