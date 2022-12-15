import React from "react"
import { createStackNavigator, StackScreenProps } from "@react-navigation/stack"
import { EditProfileScreen, ProfileScreen } from "../screens"

export type ProfileNavigatorParamList = {
  Profile: undefined
  EditProfile: undefined
}

export type ProfileStackScreenProps<T extends keyof ProfileNavigatorParamList> = StackScreenProps<
  ProfileNavigatorParamList,
  T
>

const Stack = createStackNavigator<ProfileNavigatorParamList>()
export const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ cardStyle: { backgroundColor: "transparent" }, headerShown: false }}
      initialRouteName="Profile"
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  )
}
