import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View } from "react-native"
import { AuthStackScreenProps } from "../../navigators"
import { Screen, Text, TextField, Button } from "../../components"
import { colors, spacing } from "../../theme"
import { useStores } from "../../models"

export const EnterEmailScreen: FC<AuthStackScreenProps<"EnterEmail">> = observer(
  function EnterEmailScreen(
    { navigation },
  ) {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const {
      authenticationStore: { authEmail, setAuthEmail, validationErrors },
    } = useStores()

    const errors: typeof validationErrors = isSubmitted ? validationErrors : ({} as any)

    function userExist() {
      setIsSubmitted(true)

      // const errors = Object.values(validationErrors).some((v) => !!v)
      // console.tron.log(errors);
      // console.tron.log(validationErrors);
      // console.tron.log(authEmail)
      // if (errors) return

      setIsSubmitted(false)
      navigation.navigate("Login")
    }

    return (
      <Screen style={$root} preset="scroll" safeAreaEdges={["top"]}>
      <Text testID="login-heading" tx="enterEmailScreen.title" preset="heading" />
        <View style={{ top: 200 }}>
          <TextField
            value={authEmail}
            onChangeText={setAuthEmail}
            containerStyle={$textField}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            keyboardType="email-address"
            labelTx="loginScreen.emailFieldLabel"
            placeholderTx="loginScreen.emailFieldPlaceholder"
            helper={errors?.authEmail}
            status={errors?.authEmail ? "error" : undefined}
          />

          <Button
            tx="preLoginScreen.button"
            style={{ marginTop: 16 }}
            textStyle={{ color: colors.palette.white }}
            preset="roundedFilled"
            onPress={userExist}
          />
        </View>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
  padding: 20,
}

const $textField: ViewStyle = {
  marginBottom: spacing.large,
}

