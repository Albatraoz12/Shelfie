import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          animation: "flip",
          headerStyle: { backgroundColor: "#ddd" },
          headerTintColor: "#333",
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="about" options={{ title: "About us" }} />
        <Stack.Screen name="contact" options={{ title: "Contact us" }} />
      </Stack>
    </SafeAreaView>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
