import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CustomButton from "../components/Buttons/CustomButton";
import ProductCard from "../components/Products/ProductCard";
import { useAuth } from "../hooks/useAuth";
import { useProducts } from "../hooks/useProducts";

export default function ProductScreen() {
  const { logout } = useAuth();
  const { products, loading, error, refreshProducts } = useProducts();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>Productos</Text>
          <CustomButton textButton="Cerrar sesion" actionButton={logout} />
        </View>

        {loading ? (
          <ActivityIndicator
            size="large"
            color="#C26D3B"
            style={styles.loader}
          />
        ) : null}

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        {!loading && !error ? (
          <FlatList
            data={products}
            keyExtractor={(item) => item?._id || item?.name}
            renderItem={({ item }) => <ProductCard product={item} />}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
            onRefresh={refreshProducts}
            refreshing={loading}
            ListEmptyComponent={
              <Text style={styles.emptyText}>
                No hay productos disponibles.
              </Text>
            }
          />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF5EE",
  },
  content: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 20,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  title: {
    color: "#6F3E1F",
    fontSize: 30,
    fontWeight: "800",
  },
  loader: {
    marginTop: 30,
  },
  listContainer: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  errorText: {
    marginTop: 14,
    color: "#B12929",
    fontWeight: "600",
  },
  emptyText: {
    marginTop: 24,
    color: "#8C6A53",
    textAlign: "center",
  },
});
