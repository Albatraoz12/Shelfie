import { StyleSheet, useColorScheme, View } from "react-native";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants/colors";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <>
      <StatusBar style="auto" />
      <View style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            animation: "flip",
            headerStyle: { backgroundColor: theme.navBackground },
            headerTintColor: theme.title,
          }}
        >
          <Stack.Screen name="index" options={{ title: "Home" }} />
          <Stack.Screen name="about" options={{ title: "About us" }} />
          <Stack.Screen name="contact" options={{ title: "Contact us" }} />
        </Stack>
      </View>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
