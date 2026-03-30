import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../Screens/AuthScreens/Splash/SplashSceen";
import LoginScreen from "../Screens/AuthScreens/Login/LoginScreen";
import RegisterScreen from "../Screens/AuthScreens/Register/Registration";

const Stack = createNativeStackNavigator();

const AuthNav = () => {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNav;