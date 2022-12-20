import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { ProfileStackScreenProps } from "../../../navigators"
import { Screen, TextField, Button } from "../../../components"
import { useStores, User } from "../../../models"
import { useHeader } from "../../../utils/useHeader"
import Avatar from "./Avatar"
import { colors } from "../../../theme"

export const EditProfileScreen: FC<ProfileStackScreenProps<"EditProfile">> = observer(
  function EditProfileScreen({ navigation }) {
    const { user: userStore, authenticationStore: { logout } } = useStores()

    const [user, setUser] = useState<User>(userStore)

    useHeader({
      leftIcon: "caretLeft",
      containerStyle: { backgroundColor: colors.palette.neutral300 },
      backgroundColor: colors.transparent,
      onLeftPress: () => navigation.goBack(),
      titleTx: "editProfileScreen.title",
      titleStyle: { left: 0 },
    })

    return (
      <Screen style={$root} preset="scroll">
        <Avatar displayName={user?.displayName} avatar={user?.avatar} />
        <TextField
          containerStyle={$inputContainer}
          inputWrapperStyle={$input}
          labelTx="editProfileScreen.nameFieldPlaceholder"
          value={user?.displayName}
          onChangeText={(displayName) => setUser({ ...user, displayName })}
        />
        <TextField
          containerStyle={$inputContainer}
          inputWrapperStyle={$input}
          labelTx="editProfileScreen.emailFieldPlaceholder"
          value={user?.email}
          onChangeText={(email) => setUser({ ...user, email })}
        />
        <Button
          tx="common.save"
          preset="rounded"
          style={$btn}
          onPress={() => userStore.updateProfile(user)}
        />
        <Button
          tx="editProfileScreen.logout"
          preset="rounded"
          style={$btn}
          onPress={logout}
        />
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
  padding: 16,
}

const $inputContainer: ViewStyle = {
  marginBottom: 24,
  borderBottomColor: colors.palette.black,
  borderBottomWidth: 3,
}

const $input: ViewStyle = {
  backgroundColor: colors.transparent,
  borderColor: colors.transparent,
}

const $btn: ViewStyle = {
  marginTop: 24,
  backgroundColor: colors.palette.black,
}
