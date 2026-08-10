import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks/useAuth";
import { useSplashTimer } from "../hooks/useSplashTimer";
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import TabMenu from "./TabMenu";

export default function AppContent() {
  const { isAuthenticated, isBooting } = useAuth();
  const showSplash = useSplashTimer(isBooting);

  if (showSplash) {
    return <SplashScreen />;
  }

  if (!isAuthenticated) {
    return <LoginScreen />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <TabMenu />
      </NavigationContainer>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF5EE",
  },
});
