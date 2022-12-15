import React from "react"
import { createStackNavigator, StackScreenProps } from "@react-navigation/stack"
import { RegisterScreen, EditProfileScreen, InviteScreen } from "../screens"

export type RegisterNavigatorParamList = {
  Register: undefined
  EditProfile: undefined
  Invite: undefined
}

export type RegisterStackScreenProps<T extends keyof RegisterNavigatorParamList> = StackScreenProps<
  RegisterNavigatorParamList,
  T
>

const Stack = createStackNavigator<RegisterNavigatorParamList>()
export const RegisterNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ cardStyle: { backgroundColor: "transparent" }, headerShown: false }}
      initialRouteName="Register"
    >
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="Invite" component={InviteScreen} />
    </Stack.Navigator>
  )
}
