import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../../navigators"
import { Screen, Text } from "../../components"


// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const EnterEmailScreen: FC<StackScreenProps<AppStackScreenProps, "EnterEmail">> = observer(
  function EnterEmailScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={$root} preset="scroll">
        <Text text="enterEmail" />
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}
