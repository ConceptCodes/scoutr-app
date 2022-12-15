import React from "react"
import { View, ViewStyle, TextStyle, ImageStyle } from "react-native"
import { AutoImage, Text, $sizeStyles } from "../../../components"
import { colors, spacing } from "../../../theme"

const Avatar: React.FC<{ displayName: string; avatar: string }> = ({ displayName, avatar }) => {
  // grab first character of each name if name is present
  const a = displayName ? displayName.split(" ")[0][0] : "N"
  const b = displayName ? displayName.split(" ")[1][0] : "A"
  return avatar ? (
    <AutoImage source={{ uri: avatar }} style={$image} />
  ) : (
    <View style={$noAvatar}>
      <Text style={$noAvatarText} preset="heading" text={`${a} ${b}`} />
    </View>
  )
}

// image style that center the text in the middle of the image
const $image: ImageStyle = {
  width: 150,
  height: 150,
  borderRadius: 75,
  alignSelf: "center",
}

const $noAvatar: ViewStyle = {
  ...$image,
  flex: 1,
  maxHeight: 150,
  backgroundColor: colors.palette.primary600,
  alignItems: "center",
  justifyContent: "center",
  padding: spacing.medium,
}

const $noAvatarText: TextStyle = {
  ...$sizeStyles.xxl,
  color: colors.palette.white,
  flex: 1,
  justifyContent: "center",
  textAlignVertical: "center",
  textAlign: "center",
  position: "absolute",
}

export default Avatar
