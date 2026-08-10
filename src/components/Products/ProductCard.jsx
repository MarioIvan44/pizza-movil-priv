import { StyleSheet, Text, View } from "react-native";

export default function ProductCard({ product }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{product?.name}</Text>
      <Text style={styles.description}>{product?.description}</Text>

      <View style={styles.metaRow}>
        <Text style={styles.price}>${product?.price}</Text>
        <Text style={styles.stock}>Stock: {product?.stock}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#E7D8C9",
    borderRadius: 12,
    backgroundColor: "#FFFDF8",
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 12,
  },
  name: {
    color: "#6F3E1F",
    fontSize: 19,
    fontWeight: "700",
  },
  description: {
    color: "#8C6A53",
    marginTop: 6,
    lineHeight: 20,
  },
  metaRow: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    color: "#C26D3B",
    fontSize: 18,
    fontWeight: "800",
  },
  stock: {
    color: "#6F3E1F",
    fontSize: 14,
    fontWeight: "600",
  },
});
