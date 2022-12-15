import React from "react"
import { createStackNavigator, StackScreenProps } from "@react-navigation/stack"
import { 
  EnterPhoneScreen, 
  VerifyOtpScreen,
  WelcomeScreen,
  LoginScreen,
} from "../screens"
import { RegisterNavigator, RegisterNavigatorParamList } from "./RegisterNavigator"

export type AuthNavigatorParamList = {
  Welcome: undefined
  PreLogin: undefined
  EnterPhone: undefined
  Login: undefined
  Register: RegisterNavigatorParamList
}

export type AuthStackScreenProps<T extends keyof AuthNavigatorParamList> = StackScreenProps<
  AuthNavigatorParamList,
  T
>

const Stack = createStackNavigator<AuthNavigatorParamList>()

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ cardStyle: { backgroundColor: "transparent" }, headerShown: false }}
      initialRouteName="Welcome"
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="PreLogin" component={VerifyOtpScreen} />
      <Stack.Screen name="EnterPhone" component={EnterPhoneScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterNavigator} />
    </Stack.Navigator>
  )
}
