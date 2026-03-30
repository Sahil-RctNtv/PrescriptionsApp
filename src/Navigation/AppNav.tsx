import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HealthifyPreloader from "../components/PreLoader";
import TabNav from "./TabNav";

const Stack = createNativeStackNavigator();

const AppNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Preloader" component={HealthifyPreloader} />
      <Stack.Screen name="Tabs" component={TabNav} />
    </Stack.Navigator>
  );
};

export default AppNav;