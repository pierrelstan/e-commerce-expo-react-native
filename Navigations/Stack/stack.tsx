import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/Home";
import SplashScreen from "../../screens/Splash";
import LoginScreen from "../../screens/Login";

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{}}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false, headerStyle: {} }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false, headerStyle: {} }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            headerStyle: {},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default StackNavigation;
