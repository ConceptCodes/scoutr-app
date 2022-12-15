import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle, Modal as RNModal } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "../theme"
import { Card } from "./Card"
import { Icon } from "./Icon"
import { $sizeStyles, TextProps } from "../components/Text"

export interface ModalProps {
  style?: StyleProp<ViewStyle>
  isVisible: boolean
  onBackdropPress: () => void
  onShow?: () => void
  type?: "default" | "success" | "error"
  title?: TextProps["text"]
  titleTx?: TextProps["tx"]
  icon?: React.ReactElement
}

export const Modal = observer(function Modal(props: ModalProps) {
  const { style, isVisible, onBackdropPress, title, onShow, titleTx } = props
  const $styles = [$container, style]

  switch (props.type) {
    case "success":
      return (
        <View style={$backdrop}>
          <RNModal
            animationType="slide"
            onShow={onShow}
            transparent={true}
            visible={isVisible}
            onRequestClose={onBackdropPress}
          >
            <Card
              style={$styles}
              preset="reversed"
              footerStyle={$title}
              ContentComponent={
                <View style={$icon}>
                  <Icon color={colors.success} icon="success" size={50} onPress={onBackdropPress} />
                </View>
              }
              content="Card Content"
              footerTx={titleTx}
              footer={title}
            />
          </RNModal>
        </View>
      )
    case "error":
      return (
        <View style={$backdrop}>
          <RNModal
            animationType="slide"
            onShow={onShow}
            transparent={true}
            visible={isVisible}
            onRequestClose={onBackdropPress}
          >
            <Card
              style={$styles}
              preset="reversed"
              footerStyle={$title}
              ContentComponent={
                <View style={$icon}>
                  <Icon color={colors.error} icon="error" size={50} onPress={onBackdropPress} />
                </View>
              }
              content="Card Content"
              footerTx={titleTx}
              footer={title}
            />
          </RNModal>
        </View>
      )
    default:
      return (
        <View style={$backdrop}>
          <RNModal
            animationType="slide"
            onShow={onShow}
            transparent={true}
            visible={isVisible}
            onRequestClose={onBackdropPress}
          >
            <Card
              style={$styles}
              preset="reversed"
              footerStyle={$title}
              ContentComponent={
                <View style={$icon}>
                  <Icon icon="clap" size={50} onPress={onBackdropPress} />
                </View>
              }
              content="Card Content"
              footer={titleTx || title}
            />
          </RNModal>
        </View>
      )
  }
})

const $container: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  margin: 20,
  maxHeight: 200,
  top: 250,
  backgroundColor: colors.palette.white,
  borderRadius: 20,
  padding: 50,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
}

const $title: TextStyle = {
  fontFamily: typography.primary.normal,
  ...$sizeStyles.lg,
  textAlign: "center",
  color: colors.text,
}

const $backdrop: ViewStyle = {
  backgroundColor: colors.palette.overlay80,
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}

const $icon: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  paddingBottom: 40,
}
