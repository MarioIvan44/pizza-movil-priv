import { AuthProvider } from "./src/context/AuthContext";
import AppContent from "./src/navigation/AppContent";

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}