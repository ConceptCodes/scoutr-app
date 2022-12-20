import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { ImageBackground, ImageStyle, View, ViewStyle } from "react-native"
import { Button } from "../../components"
import { AuthStackScreenProps } from "../../navigators"
import { colors, spacing } from "../../theme"
import { useSafeAreaInsetsStyle } from "../../utils/useSafeAreaInsetsStyle"

const bgImage = require("../../../assets/images/get-started.png")

interface WelcomeScreenProps extends AuthStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen({
  navigation,
}) {
  function goNext() {
    navigation.navigate("AcceptTerms")
  }

  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])

  return (
    <View style={$container}>
      <ImageBackground source={bgImage} resizeMode="cover" style={$image}>
        <View style={[$bottomContainer, $bottomContainerInsets]}>
          <Button
            testID="next-screen-button"
            preset="reversed"
            tx="welcomeScreen.button"
            onPress={goNext}
            style={$btn}
          />
        </View>
      </ImageBackground>
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  flexBasis: "65%",
  paddingHorizontal: spacing.large,
  justifyContent: "space-around",
}

const $btn: ViewStyle = {
  backgroundColor: colors.palette.primary600,
  top: '50%',
  width: '50%',
  height: 40,
}

const $image: ImageStyle = {
  flex: 1,
  justifyContent: "flex-end",
}
