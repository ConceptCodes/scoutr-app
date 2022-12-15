import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle, View } from "react-native"
import { RootTabScreenProps } from "../../../navigators"
import { Screen, Text, $sizeStyles, Card, Icon, Toggle } from "../../../components"
import { useHeader } from "../../../utils/useHeader"
import { useStores } from "../../../models"
import { spacing, colors } from "../../../theme"
import Avatar from "./Avatar"

export const ProfileScreen: FC<RootTabScreenProps<"ProfileNav">> = observer(function ProfileScreen({
  navigation,
}) {
  // const [loading, setLoading] = useState(false)

  const [isAway, setIsAway] = React.useState(false)

  const {
    authenticationStore: { authEmail },
  } = useStores()

  useHeader({
    rightIcon: "settings",
    onRightPress: () => navigation.navigate("ProfileNav", { screen: "EditProfile" }),
  })

  return (
    <Screen preset="scroll" contentContainerStyle={$root}>
      {/* {loading && <ActivityIndicator size="large" />} */}
      <Avatar
        displayName="Manny Monroe"
        avatar="https://avatars.githubusercontent.com/u/88909266?v=4"
      />
      <Text style={$title} preset="heading" text="Manny Monroe" />
      <Text style={$bio} preset="subheading" text={authEmail || ""} size="sm" />
      <Card
        style={$card}
        verticalAlignment="center"
        LeftComponent={
          <View style={$row}>
            <Icon icon="away" size={40} color={colors.palette.primary600} />
            <Text preset="heading" style={{ paddingLeft: 20 }} text="Away" size="lg" />
          </View>
        }
        RightComponent={<Toggle value={isAway} variant="switch" onValueChange={setIsAway} />}
      />
      <Card
        contentStyle={$card}
        verticalAlignment="center"
        LeftComponent={
          <View style={$row}>
            <Icon icon="events" size={40} color={colors.palette.primary600} />
            <Text preset="heading" style={{ paddingLeft: 20 }} text="My Events" size="lg" />
          </View>
        }
        onPress={() => navigation.navigate("ProfileNav", { screen: "Stats" })}
      />
      <Card
        style={$card}
        verticalAlignment="center"
        LeftComponent={
          <View style={$row}>
            <Icon icon="share" size={40} color={colors.palette.primary600} />
            <Text preset="heading" style={{ paddingLeft: 20 }} text="Share Profile" size="lg" />
          </View>
        }
        onPress={() => navigation.navigate("ProfileNav", { screen: "Stats" })}
      />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  padding: 50,
  alignItems: "center",
}

const $title: TextStyle = {
  marginTop: spacing.medium,
  ...$sizeStyles.xxl,
}

const $bio: TextStyle = {
  marginTop: spacing.small,
  color: colors.palette.primary600,
  textAlign: "center",
}

const $row: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
}

const $card: ViewStyle = {
  ...$row,
  justifyContent: "space-between",
  marginVertical: spacing.medium,
  width: "100%",
  height: 50,
}
