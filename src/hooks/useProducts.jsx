import { useCallback, useEffect, useState } from "react";
import { useAuth } from "./useAuth";

export function useProducts() {
  const { apiBaseUrl } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${apiBaseUrl}/pizzas`);
      const data = await response.json().catch(() => []);

      if (!response.ok) {
        throw new Error("No se pudieron cargar los productos");
      }

      setProducts(Array.isArray(data) ? data : []);
    } catch (requestError) {
      setError(requestError.message || "Error al cargar productos");
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, [apiBaseUrl]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error, refreshProducts: fetchProducts };
}
