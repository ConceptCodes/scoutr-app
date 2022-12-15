import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle } from "react-native"
import type { RootTabScreenProps } from "../../navigators"
import { Screen } from "../../components"
import { useHeader } from "../../utils/useHeader"
import { colors } from "../../theme"

export const SearchScreen: FC<RootTabScreenProps<"Search">> = observer(function SearchScreen({
  navigation,
}) {
  useHeader({
    title: "Search",
    titleStyle: $title,
    rightIcon: "menu",
    onRightPress: () => navigation.navigate("Notification"),
  })

  return <Screen style={$root} preset="scroll"></Screen>
})

const $root: ViewStyle = {
  flex: 1,
}

const $title: TextStyle = {
  fontSize: 48,
  fontWeight: "bold",
  lineHeight: 72,
  fontStyle: "normal",
  textAlign: "left",
  top: 0,
  left: 0,
  color: colors.palette.primary600,
}
