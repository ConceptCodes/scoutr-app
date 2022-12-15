import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View } from "react-native"
import { AuthStackScreenProps } from "../../navigators"
import { Screen, Text, TextField, Button } from "../../components"
import { useHeader } from "../../utils/useHeader"
import { colors } from "../../theme"

export const EnterEmailScreen: FC<AuthStackScreenProps<"EnterEmail">> = observer(
  function EnterEmailScreen() {
    useHeader({
      LeftActionComponent: (
        <Text tx="enterEmailScreen.title" preset="heading" style={{ paddingHorizontal: 16 }} />
      ),
      style: {
        height: 200,
      },
    })

    return (
      <Screen style={$root} preset="scroll">
        <View style={{ top: 100 }}>
          <TextField
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
            style={{ marginTop: 16 }}
          />
          <Button
            tx="preLoginScreen.button"
            style={{ marginTop: 16 }}
            textStyle={{ color: colors.palette.white }}
            preset="roundedFilled"
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
