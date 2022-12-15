import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle, View } from "react-native"
import type { RootTabScreenProps } from "../../navigators"
import { Screen, Text, Icon } from "../../components"
import { useHeader } from "../../utils/useHeader"
import { colors } from "../../theme"

export const SearchScreen: FC<RootTabScreenProps<"Search">> = observer(function SearchScreen({
  navigation,
}) {
  useHeader({
    LeftActionComponent: <Text preset="heading" style={$title} tx="searchScreen.title" />,
    rightIcon: "menu",
    onRightPress: () => navigation.navigate("Notification"),
  })

  return (
    <Screen style={$root} preset="scroll">
      <View style={$topScoutrsContainer}>
        <Text preset="heading" style={$topScoutrs} tx="searchScreen.topScoutrs" />
        <Icon icon="caretRight" style={{ marginLeft: 10 }} size={30} />
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  padding: 16,
}

const $title: TextStyle = {
  fontSize: 48,
  fontWeight: "bold",
  lineHeight: 72,
  fontStyle: "normal",
  textAlign: "left",
  top: 0,
  left: 16,
  color: colors.palette.primary600,
}

const $topScoutrs: TextStyle = {
  fontSize: 36,
  fontWeight: "bold",
  lineHeight: 54,
  fontStyle: "normal",
  textAlign: "left",
}

const $topScoutrsContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  justifyContent: "space-between",
  top: 25,
}
