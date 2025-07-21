import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "../../constants/Colors";

const DashboardLayouts = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return <Tabs screenOptions={{ headerShown: false }} />;
};

export default DashboardLayouts;
