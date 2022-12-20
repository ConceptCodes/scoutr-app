import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, ActivityIndicator, TextStyle, View } from "react-native"
import { AuthStackScreenProps } from "../../navigators"
import { Screen, Text, Button, $sizeStyles } from "../../components"
import { useHeader } from "../../utils/useHeader"
import { colors, spacing } from "../../theme"
import { api } from "../../services/api"

export const AcceptTermsScreen: FC<AuthStackScreenProps<"AcceptTerms">> = observer(
  function AcceptTermsScreen({ navigation }) {
    const [terms, setTerms] = useState<string[]>()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
      api.metadata.getTermsAndConditions().then((res) => {
        setTerms(res.data)
        setLoading(false)
      })
    }, [])

    useHeader({
      leftIcon: "caretLeft",
      containerStyle: { backgroundColor: colors.palette.neutral300 },
      backgroundColor: colors.transparent,
      onLeftPress: () => navigation.goBack(),
      titleTx: "acceptTermsScreen.title",
      titleStyle: { left: 0 },
    })

    return (
      <Screen style={$root} preset="scroll">
        {loading && <ActivityIndicator />}
        <View style={$container}>
          <Text preset="subheading" text={terms} />
        </View>
        <Button
          textStyle={$btnText}
          tx="common.acceptBtn"
          style={$btn}
          onPress={() => navigation.navigate("PreLogin")}
        />
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
  
}

const $container: ViewStyle = {
  flex: 1,
  padding: spacing.medium,
  paddingBottom: spacing.massive,
}

const $btn: ViewStyle = {
  backgroundColor: colors.palette.primary600,
  width: '100%',
  bottom: 0,
  height: 40,
  margin: 0,
  padding: 0,
  position: 'absolute',
}

const $btnText: TextStyle = {
  color: colors.palette.white,
  ...$sizeStyles.lg
}
