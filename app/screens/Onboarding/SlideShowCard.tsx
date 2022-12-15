import * as React from "react"
import {
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
  ImageStyle,
  ImageBackground,
  ImageSourcePropType,
} from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing } from "../../theme"
import { Text, TextProps, Button, Icon } from "../../components"
import { useSafeAreaInsetsStyle } from "../../utils/useSafeAreaInsetsStyle"

export interface SlideShowCardProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  /**
   * Image source
   */
  imageUri: ImageSourcePropType

  /**
   * TitleTx
   */
  titleTx?: TextProps["tx"]

  /**
   * Title
   */
  title?: TextProps["text"]

  /**
   * DescriptionTx
   */
  descriptionTx?: TextProps["tx"]

  /**
   * Description
   */
  description?: TextProps["text"]
}

export const SlideShowCard = observer(function SlideShowCard(props: SlideShowCardProps) {
  const { style, imageUri, titleTx, title, descriptionTx, description } = props
  const $styles = [$container, style]

  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])

  return (
    <View style={$styles}>
      <View style={$topContainer}>
        <ImageBackground resizeMode="cover" source={imageUri} style={$header} />
      </View>

      <View style={[$bottomContainer, $bottomContainerInsets]}>
        <Text style={$title} tx={titleTx} text={title} size="xxl" preset="heading" />
        <Text style={$description} tx={descriptionTx} text={description} preset="subheading" />
        <View style={$btns}>
          <Button
            tx="preLoginScreen.button"
            style={{ paddingHorizontal: spacing.large }}
            textStyle={$mainButtonTextStyle}
            preset="roundedFilled"
          />
          <View style={$oAuth}>
            <Button
              tx="preLoginScreen.button"
              textStyle={$mainButtonTextStyle}
              preset="outlineRounded"
            >
              <Icon icon="google" color={colors.palette.primary600} />
            </Button>
            <Button
              tx="preLoginScreen.button"
              textStyle={$mainButtonTextStyle}
              preset="outlineRounded"
            >
              <Icon icon="apple" color={colors.palette.primary600} />
            </Button>
          </View>
        </View>
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
}

const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "57%",
  justifyContent: "center",
  top: 0,
  position: "relative",
}

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  flexBasis: "43%",
  padding: spacing.huge,
  justifyContent: "space-around",
  alignItems: "center",
}

const $header: ImageStyle = {
  width: "100%",
  height: "100%",
  marginBottom: spacing.huge,
}

const $title: TextStyle = {
  marginBottom: spacing.extraSmall,
  textAlign: "center",
  color: colors.palette.primary600,
}

const $description: TextStyle = {
  marginBottom: spacing.large,
  textAlign: "center",
}

const $mainButtonTextStyle: TextStyle = {
  color: colors.palette.white,
  textAlign: "center",
}

const $btns: ViewStyle = {
  flexDirection: "column",
  justifyContent: "center",
  paddingHorizontal: spacing.massive,
}

const $oAuth: ViewStyle = {
  width: "100%",
  height: 1,
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: spacing.large,
}
