import { useState } from "react";

export function useTabNavigation() {
  const [activeTab, setActiveTab] = useState("home");

  const goToHome = () => setActiveTab("home");
  const goToProducts = () => setActiveTab("products");

  return { activeTab, goToHome, goToProducts };
}
