import React from "react"
import { createStackNavigator, StackScreenProps } from "@react-navigation/stack"
import {
  EnterEmailScreen,
  PreLoginScreen,
  WelcomeScreen,
  LoginScreen,
  AcceptTermsScreen,
} from "../screens"
import { RegisterNavigator, RegisterNavigatorParamList } from "./RegisterNavigator"

export type AuthNavigatorParamList = {
  Welcome: undefined
  AcceptTerms: undefined
  PreLogin: undefined
  EnterEmail: undefined
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
      <Stack.Screen name="AcceptTerms" component={AcceptTermsScreen} />
      <Stack.Screen name="PreLogin" component={PreLoginScreen} />
      <Stack.Screen name="EnterEmail" component={EnterEmailScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterNavigator} />
    </Stack.Navigator>
  )
}
